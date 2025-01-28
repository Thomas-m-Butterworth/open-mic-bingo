"use-case";
import { winningCombos } from "@/data/games";
import {
  BingoContainer,
  BingoGrid,
  BingoSquare,
  BingoText,
  BingoWin,
  BingoWinTitle,
} from "./Bingo.styled";
import { useBingoStore } from "@/store/bingoStore";
import { useEffect } from "react";
import { fetchBingoData } from "@/hooks";

export const Bingo = () => {
  const {
    animatingSquares,
    bingoData,
    setBingoData,
    board,
    setBingoLoading,
    selectedSquares,
    setSelectedSquares,
    removeSelectedSquares,
    initializeBoard,
  } = useBingoStore();

  useEffect(() => {
    const fetchData = async () => {
      if (!bingoData.length) {
        setBingoLoading(true);
        const newBingoData = await fetchBingoData();
        setBingoData(newBingoData);
        setBingoLoading(false);
      }
    };

    fetchData();
  }, [bingoData.length, setBingoData, setBingoLoading]);

  useEffect(() => {
    if (!board.length) {
      initializeBoard();
    }
  }, [board, initializeBoard]);

  const onClick = (index: number) => {
    if (isSelected(index)) removeSelectedSquares(index);
    else setSelectedSquares(index);
  };

  const isSelected = (index: number): boolean => {
    return selectedSquares.includes(index);
  };

  const isWinner = winningCombos.some((combo) =>
    combo.every((index) => selectedSquares.includes(index))
  );

  return (
    <BingoContainer>
      <BingoGrid>
        {board.map((square, index) => (
          <BingoSquare
            key={`square-${index}`}
            onClick={() => onClick(index)}
            $isSelected={isSelected(index)}
            $isAnimating={animatingSquares[index]}
            $index={index}
          >
            <BingoText $isAnimating={animatingSquares[index]}>
              {square.quote}
            </BingoText>
          </BingoSquare>
        ))}
      </BingoGrid>

      <BingoWin $isWinner={isWinner}>
        {isWinner && <BingoWinTitle data-text="Bingo!">Bingo!</BingoWinTitle>}
      </BingoWin>
    </BingoContainer>
  );
};
