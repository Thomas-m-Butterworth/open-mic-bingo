import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.colours.bg};
    --foreground: #f0f0f0;
    --disabled: #d3d3d3;

    --scratch-black: #000000;
    --scratch-red: #ff0000;
    --scratch-yellow: #ffdb00;
    --scratch-pink: #ff93e1;
    --scratch-white: #ffffff;

    --sfc-black: #000000;
    --sfc-deep-purple: #441c5b;
    --sfc-med-purple: #663a79;
    --sfc-light-purple: #a88fac;
    --sfc-white: #ffffff;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
  }

  body {
    color: var(--foreground);
    background: var(--background);
    font-family: var(--body-font), Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;
