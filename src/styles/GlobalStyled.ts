import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Lato", "Arial", sans-serif;
    font-size: .833vw;
    line-height: 1.18;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #000000;
    max-width: 100vw
  }

  a {
    background-color: transparent ;
    text-decoration: none;
    cursor: pointer;
  }
  
  b,
  strong {
    font-weight: bolder
  }

  small {
    font-size: 80%
  }
  
  img {
    border-style: none
  }
  ul {
     list-style: none;
   }
  
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
  }

  button,
  input {
    overflow: visible
  }
`