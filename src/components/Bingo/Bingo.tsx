"use-case";
import { winningCombos } from "@/data/games";
import {
  BingoContainer,
  BingoGrid,
  BingoSquare,
  BingoText,
} from "./Bingo.styled";
import { useBingoStore } from "@/store/bingoStore";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../ui";

const slideDown = keyframes`
  from {
    transform: translateY(-150%);
  }
  to {
    transform: translateY(0);
  }
`;

const BingoWin = styled.div<{ $isWinner: boolean }>`
  max-height: ${(props) => (props.$isWinner ? "100px" : "0")};
  padding: 2px;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const BingoWinTitle = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colours.headerText};
  font-family: var(--title-font);
  font-size: 2.5rem;
  letter-spacing: 1px;
  margin: 0;
  z-index: 0;
  animation: ${slideDown} 0.5s ease-in-out;

  &::before {
    content: attr(data-text);
    color: transparent;
    -webkit-text-stroke: 4px #000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  &::after {
    content: attr(data-text);
    color: transparent;
    -webkit-text-stroke: 6px ${({ theme }) => theme.colours.headerStroke};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
`;

export const Bingo = () => {
  const {
    board,
    resetBoard,
    selectedSquares,
    setSelectedSquares,
    removeSelectedSquares,
    resetSelectedSquares,
    initializeBoard,
  } = useBingoStore();

  useEffect(() => {
    if (!board.length) initializeBoard();
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
          >
            <BingoText>{square.quote}</BingoText>
          </BingoSquare>
        ))}
      </BingoGrid>

      <BingoWin $isWinner={isWinner}>
        {isWinner && <BingoWinTitle data-text="Bingo!">Bingo!</BingoWinTitle>}
      </BingoWin>
      <Controls>
        <Button onClick={resetBoard}>Reset Board</Button>
        <Button
          onClick={resetSelectedSquares}
          disabled={!selectedSquares.length}
        >
          Reset Selections
        </Button>
      </Controls>
    </BingoContainer>
  );
};
