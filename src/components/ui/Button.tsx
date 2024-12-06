import styled from "styled-components";

export const Button = styled.button`
    height: 36px;
    width: 160px;
    font-family: var(--button-font);
    border: solid 2px var(--foreground);
    border-radius: 12px;
    background-color: var(--background);
    color: var(--foreground);
    &:hover {
        border: solid 2px var(--scratch-pink);
        background-color: var(--foreground);
        color: var(--background);
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
    &:disabled {}
`