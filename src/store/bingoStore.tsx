import { bingo } from '@/data';
import { shuffleArr } from '@/utils';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BingoType {
    quote: string;
};

export interface BingoStore {
    board: BingoType[];
    selectedSquares: number[],
    setSelectedSquares: (sq: number) => void;
    removeSelectedSquares: (sq: number) => void;
    resetSelectedSquares: () => void;
    resetBoard: () => void;
    initializeBoard: () => void;
}

export const handleInitBoard = (set: (partial: Partial<BingoStore>) => void) => {
    const shuffledQuotes = shuffleArr(bingo);
    const trimmedQuotes = shuffledQuotes.slice(0, 16);
    return set({board: [...trimmedQuotes]})
};

export const useBingoStore = create(persist<BingoStore>(
    (set) => ({
    board: [],
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
            selectedSquares: [...state.selectedSquares.filter(s => s !== sq)]
        }));
    },
    resetBoard: () => {
        set({ board: [], selectedSquares: []})
    },
    initializeBoard: () => handleInitBoard(set)
}),
    {
        name: 'open-mic-bingo-storage'
    }   
));