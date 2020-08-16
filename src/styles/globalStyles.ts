import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-border-color: #d9dadc;
    --primary-spotify-color: #1ed760;
    --secondary-spotify-color: #1db954;
    --primary-spotify-footer-color: #282828;
    --primary-spotify-sidebar-color: #040404;
    --primary-spotify-body-color: #121212;
    --primary-spotify-text-color: #b3b3b3;
  }

  ::-webkit-scrollbar {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: hsla(0,0%,100%,.3);
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-color: hsla(0,0%,100%,.3) #040404;
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

  input {
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
