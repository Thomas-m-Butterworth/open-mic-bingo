import { NightTheme, NightType } from "@/utils";

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
  isResetting: boolean;
  setIsResetting: (resetting: boolean) => void;
  initializeBoard: () => void;
  bingoLoading: boolean;
  setBingoLoading: (loading: boolean) => void;
  resettingSquares: number[];
  setResettingSquares: (squares: number[]) => void;
  animatingSquares: boolean[];
  setAnimatingSquares: (animating: boolean[]) => void;
  updateAnimatingSquare: (index: number, isAnimating: boolean) => void;
  previousBoard: BingoType[];
  setPreviousBoard: (board: BingoType[]) => void;
  resetCount: number;
  setResetCount: (count: number) => void;
}
