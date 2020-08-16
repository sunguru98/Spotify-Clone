import styled from "styled-components";

export default styled.header`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 6.4rem);
  top: 0;
  height: 6rem;

  & .history-buttons {
    display: flex;
    align-items: center;

    & button {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      border: none;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.6rem;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      & svg {
        width: 2.2rem;
        height: 2.2rem;
      }

      & polyline {
        stroke-width: 1pt;
        stroke: currentColor;
      }
    }
  }
`;
