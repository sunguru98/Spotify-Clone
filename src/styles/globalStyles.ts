import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-border-color: #d9dadc;
    --primary-spotify-color: #1ed760;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Circular", sans-serif;
    font-weight: normal;
  }

  a:active, a:visited, a:link {
    color: inherit;
    text-decoration: none;
  }
`;
