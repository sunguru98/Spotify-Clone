import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-border-color: #d9dadc;
    --primary-spotify-color: #1ed760;
    --primary-spotify-footer-color: #282828;
    --primary-spotify-sidebar-color: #040404;
    --primary-spotify-body-color: #121212;
    --primary-spotify-text-color: #b3b3b3;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  [class*=" spoticon"]::before, [class^="spoticon"]::before {
    font-family: "Spoticon";
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: inherit;
    vertical-align: bottom;
    display: inline-block;
    text-decoration: inherit;
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

  ul { 
    list-style: none;
  }
`;
