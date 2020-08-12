import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
}
`;
