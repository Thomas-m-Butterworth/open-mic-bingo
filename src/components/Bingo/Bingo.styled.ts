import styled, { css, keyframes } from "styled-components";

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateX(340deg);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-150%);
  }
  to {
    transform: translateY(0);
  }
`;

export const BingoWin = styled.div<{ $isWinner: boolean }>`
  min-height: 52px;
  max-height: 100px;
  padding: 2px;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

export const BingoWinTitle = styled.h2`
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

export const BingoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const BingoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 8px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 8px;
  gap: 2px;
  perspective: 1000px;
`;

export const BingoSquare = styled.div<{
  $isSelected: boolean;
  $isAnimating: boolean;
  $index: number;
}>`
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colours.bingoSelect : theme.colours.bingoBg};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colours.bingoBg : theme.colours.text};
  border-radius: 8px;
  padding: 3px 5px;
  cursor: pointer;
  line-height: 1.2;
  max-height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  aspect-ratio: 1;
  transform-style: preserve-3d;
  transition: background-color 0.3s ease, color 0.3s ease;
  animation: ${({ $isAnimating, $index }) =>
    $isAnimating
      ? css`
          ${flipAnimation} 0.6s ease-in-out ${$index * 0.1}s
        `
      : "none"};
  backface-visibility: visible;
`;

export const BingoText = styled.p<{
  $isAnimating: boolean;
}>`
  color: ${({ $isAnimating, theme }) =>
    $isAnimating ? theme.colours.bingoBg : theme.colours.text};
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.5px;
  opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
`;
