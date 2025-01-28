import { parseBingo, shuffleArr } from "@/utils";
import { BingoStore } from "./types";

export const handleInitBoard = async (
  set: (partial: Partial<BingoStore>) => void,
  get: () => BingoStore
) => {
  const { bingoData: bingo, night, resetSelectedSquares } = get();
  if (!night) return;
  resetSelectedSquares();
  const nightBingo = parseBingo(night.night, bingo);
  const shuffledQuotes = shuffleArr(nightBingo);
  const trimmedQuotes = shuffledQuotes.slice(0, 16);
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
