import styled from "styled-components";

export const Button = styled.button`
  height: 36px;
  width: 160px;
  margin-left: 4px;
  margin-right: 4px;
  font-family: var(--button-font);
  border: solid 2px ${({ theme }) => theme.colours.buttonStroke};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colours.buttonBg};
  color: var(--foreground);
  &:hover {
    border: solid 2px ${({ theme }) => theme.colours.bingoSelect};
    background-color: var(--foreground);
    color: var(--background);
    cursor: pointer;
  }
  &:active {
    border: solid 2px ${({ theme }) => theme.colours.bingoSelect};
    background-color: ${({ theme }) => theme.colours.buttonBg};
  }
  &:disabled {
    border: solid 2px ${({ theme }) => theme.colours.buttonBg};
    background-color: var(--disabled);
    color: var(--background);
    cursor: not-allowed;
  }
`;
