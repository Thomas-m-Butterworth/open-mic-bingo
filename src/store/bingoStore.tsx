import { nightMap } from "@/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BingoStore } from "./types";
import { handleInitBoard, handleResetAnimation } from "./handlers";

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
        handleResetAnimation(set, get);
      },
      isResetting: false,
      setIsResetting: (resetting) => set({ isResetting: resetting }),
      initializeBoard: () => handleInitBoard(set, get),
      bingoLoading: false,
      setBingoLoading: (loading) => set({ bingoLoading: loading }),
      resettingSquares: [],
      setResettingSquares: (squares) => set({ resettingSquares: squares }),
      animatingSquares: Array(16).fill(false),
      setAnimatingSquares: (animating) => set({ animatingSquares: animating }),
      updateAnimatingSquare: (index, isAnimating) =>
        set((state) => {
          const animatingSquares = [...state.animatingSquares];
          animatingSquares[index] = isAnimating;
          return { animatingSquares };
        }),
    }),
    {
      name: "open-mic-bingo-storage",
    }
  )
);
