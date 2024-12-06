import styled from "styled-components";

export const BingoContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const BingoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 8px;
  gap: 2px;
`;

export const BingoSquare = styled.div<{$isSelected: boolean}>`
  background-color: ${(props) => (props.$isSelected ? "#ff93e1" : "#f0f0f0")};
  color: #000000;
  border-radius: 8px;
  padding: 3px 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.7rem;
  line-height: 1.2;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  aspect-ratio: 1 / 1;
`;

export const BingoText = styled.p`
  font-size: 10px;
  line-height: 11px;
  letter-spacing: 0.5px;
  `

export const BingoWinText = styled.h2`
font-family: var(--title-font);
font-size: 2rem;
letter-spacing: 1.6px;
position: absolute;
bottom: 16px;
left: 50%;
transform: translateX(-50%);
background: transparent;
color: var(--scratch-yellow);
z-index: 0;
text-align: center;
width: 100%;

&::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: transparent;
  -webkit-text-stroke: 4px var(--background);
  z-index: -1;
}

&::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: transparent;
  -webkit-text-stroke: 6px var(--scratch-pink);
  z-index: -2;
}
`