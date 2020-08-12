import styled from "styled-components";

export default styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  & header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 0 1rem 0;
    border-bottom: 1px solid var(--primary-border-color);
    & div {
      min-height: 7.3rem;
      & img {
        max-width: 20rem;
      }
    }
  }

  & button {
    margin-top: 10rem;
    align-self: center;
    justify-self: center;
  }
`;
