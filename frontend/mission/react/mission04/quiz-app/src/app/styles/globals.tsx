// src/styles/globals.tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
