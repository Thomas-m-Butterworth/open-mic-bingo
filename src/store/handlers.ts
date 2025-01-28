import { parseBingo, shuffleArr } from "@/utils";
import { BingoStore } from "./types";

export const handleInitBoard = async (
  set: (partial: Partial<BingoStore>) => void,
  get: () => BingoStore
) => {
  const {
    bingoData: bingo,
    night,
    resetSelectedSquares,
    previousBoard,
    resetCount,
  } = get();
  if (!night) return;
  resetSelectedSquares();

  const nightBingo = parseBingo(night.night, bingo);
  let shuffledQuotes = shuffleArr(nightBingo);

  if (nightBingo.length > 28) {
    const availableQuotes = shuffledQuotes.filter(
      (quote) => !previousBoard.some((bingo) => bingo.quote === quote.quote)
    );
    shuffledQuotes = availableQuotes;
  }

  const trimmedQuotes = shuffledQuotes.slice(0, 16);
  const quotesToBlacklist = trimmedQuotes.slice(0, 4);

  const maxBlacklistAge = 3;
  const newPreviousBoard = [
    ...previousBoard,
    ...quotesToBlacklist.map((q) => ({
      night: [night.night],
      quote: q.quote,
    })),
  ];

  let newResetCount = resetCount;
  if (resetCount >= maxBlacklistAge) {
    const decayedBoard = newPreviousBoard.slice(
      newPreviousBoard.length - maxBlacklistAge
    );
    newResetCount = 0;
    set({ previousBoard: decayedBoard, resetCount: newResetCount });
  } else {
    set({ previousBoard: newPreviousBoard });
  }

  set({ resetCount: newResetCount + 1 });
  return set({ board: [...trimmedQuotes] });
};

export const handleResetAnimation = (
  set: (partial: Partial<BingoStore>) => void,
  get: () => BingoStore
) => {
  set({ isResetting: true });
  const allSquares = Array.from({ length: 16 }, (_, i) => i);

  handleInitBoard(set, get);

  set({ resettingSquares: allSquares, animatingSquares: Array(16).fill(true) });

  allSquares.forEach((index) => {
    setTimeout(() => {
      get().updateAnimatingSquare(index, false);
    }, 600 + index * 100);
  });

  const totalResetDuration = 16 * 0.05 + 0.6;
  setTimeout(() => {
    set({ resettingSquares: [] });
    set({ isResetting: false });
  }, totalResetDuration * 1000);
};
