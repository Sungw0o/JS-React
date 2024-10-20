import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #fdf5e6; /* 백그라운드 색상을 지정 */
  }
  
  h1 {
    color: #333;
    text-align: center;
  }

  input, button {
    font-size: 16px;
  }
`;

export default GlobalStyles;
