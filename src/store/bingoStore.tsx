import {
  nightMap,
  NightTheme,
  NightType,
  parseBingo,
  shuffleArr,
} from "@/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BingoType {
  night: NightType[];
  quote: string;
}

export interface BingoStore {
  bingoData: BingoType[];
  setBingoData: (newBingoData: BingoType[]) => void;
  board: BingoType[];
  night: NightTheme;
  setNight: (night: NightTheme) => void;
  selectedSquares: number[];
  setSelectedSquares: (sq: number) => void;
  removeSelectedSquares: (sq: number) => void;
  resetSelectedSquares: () => void;
  resetBoard: () => void;
  initializeBoard: () => void;
}

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

export const useBingoStore = create(
  persist<BingoStore>(
    (set, get) => ({
      bingoData: [],
      setBingoData: (newBingoData) => {
        set({ bingoData: newBingoData });
      },
      board: [],
      night: nightMap["scratch"],
      setNight: (night) => {
        const currentState = get();
        if (night.night !== currentState.night.night) {
          set({ night });
          currentState.initializeBoard();
        }
      },
      selectedSquares: [],
      setSelectedSquares: (sq) => {
        set((state) => ({
          selectedSquares: [...state.selectedSquares, sq],
        }));
      },
      resetSelectedSquares: () => {
        set({
          selectedSquares: [],
        });
      },
      removeSelectedSquares: (sq) => {
        set((state) => ({
          selectedSquares: [...state.selectedSquares.filter((s) => s !== sq)],
        }));
      },
      resetBoard: () => {
        set({ board: [], selectedSquares: [] });
      },
      initializeBoard: () => handleInitBoard(set, get),
    }),
    {
      name: "open-mic-bingo-storage",
    }
  )
);
