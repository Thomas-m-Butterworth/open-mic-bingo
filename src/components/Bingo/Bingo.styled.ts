import styled from "styled-components";

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
`;

export const BingoSquare = styled.div<{ $isSelected: boolean }>`
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colours.bingoSelect : theme.colours.bingoBg};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colours.bingoBg : theme.colours.text};
  border-radius: 8px;
  padding: 3px 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1.2;
  max-height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  aspect-ratio: 1;
`;

export const BingoText = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.5px;
`;
