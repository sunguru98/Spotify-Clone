import styled from "styled-components";

export default styled.div<{ level: number }>`
  height: 1.2rem;
  width: 100%;
  position: relative;

  & .inner-wrapper,
  & .level-wrapper,
  & .level {
    height: 0.4rem;
    width: 100%;
    border-radius: 0.2rem;
  }

  &:hover {
    cursor: pointer;
    & .level {
      background: #1db954;
    }

    & .level-controller {
      opacity: 1;
    }
  }

  & .inner-wrapper {
    background: #535353;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  & .level-wrapper {
    overflow: hidden;
  }

  & .level {
    background: var(--primary-spotify-text-color);
    transform: translateX(${props => props.level}%);
  }

  & .level-controller {
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    left: ${props => 100 + props.level}%;
    margin-left: -0.6rem;
    width: 1.2rem;
    height: 1.2rem;
    opacity: 0;
    z-index: 3;
  }
`;
