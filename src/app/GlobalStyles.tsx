import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.colours.bg};
    --foreground: #f0f0f0;
    --disabled: #d3d3d3;

    --scratch-black: #000000;
    --scratch-white: #ffffff;
    --scratch-red: #ff0000;
    --scratch-yellow: #ffdb00;
    --scratch-pink: #ff93e1;

    --sfc-black: #000000;
    --sfc-white: #ffffff;
    --sfc-deep-purple: #441c5b;
    --sfc-med-purple: #663a79;
    --sfc-light-purple: #a88fac;

    --mates-black: #000000;
    --mates-white: #fff7e7;
    --mates-red: #e00000;
    --mates-blue: #1d6aae;
    --mates-green: #34ce0e;
    --mates-orange: #ffa900;

    --swamp-black: #000000;
    --swamp-white: #ffffff;
    --swamp-yellow: #F2DA0D;
    --swamp-orange: #E37C25;
    --swamp-red: #A61E22;
    --swamp-green: #7bae41;
    
    --danpowell-black: #000000; 
    --danpowell-white: #ffffff;
    --danpowell-yellow: #FFE900;
    --danpowell-orange: #E53D00;
    --danpowell-grey: #7a7d7d;
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
