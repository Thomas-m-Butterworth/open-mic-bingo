import styled from "styled-components";

export const Button = styled.button`
  height: 36px;
  width: 160px;
  margin-left: 4px;
  margin-right: 4px;
  font-family: var(--button-font);
  border: solid 2px var(--foreground);
  border-radius: 12px;
  background-color: var(--background);
  color: var(--foreground);
  &:hover {
    border: solid 2px var(--scratch-pink);
    background-color: var(--foreground);
    color: var(--background);
    cursor: pointer;
  }
  &:focus {
    border: solid 2px var(--foreground);
    background-color: var(--background);
    color: var(--foreground);
  }
  &:active {
    border: solid 2px var(--scratch-pink);
    background-color: var(--foreground);
    color: var(--background);
  }
  &:disabled {
    border: solid 2px var(--foreground);
    background-color: var(--disabled);
    color: var(--background);
    cursor: not-allowed;
  }
`;
