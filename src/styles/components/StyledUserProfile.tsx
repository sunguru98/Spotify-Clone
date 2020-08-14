import styled from "styled-components";

export default styled.div<{ isDropped: boolean }>`
  position: relative;

  ul {
    margin-top: 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--primary-spotify-footer-color);
    color: var(--primary-spotify-text-color);
    position: absolute;
    z-index: 2;
    right: 0;
    width: 100%;

    & li {
      padding: 0.3rem 2rem;
      line-height: 3.2rem;
      font-size: 1.4rem;
      &:hover {
        background: #333;
        color: #fff;
        cursor: pointer;
      }
    }

    & hr {
      height: 1px;
      background: #404040;
      border: none;
    }

    & button {
      font-size: 1.2rem;
      padding: .3rem 1.5rem;
      cursor: pointer;
    }
  }

  button.dropdown {
    margin-left: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ isDropped }) =>
      !isDropped
        ? "rgba(0, 0, 0, 0.7)"
        : "var(--primary-spotify-footer-color)"};
    transition: all 0.3s;
    height: 3.2rem;
    min-width: 3.2rem;
    padding: 0.2rem;
    border-radius: 2.3rem;
    font-family: "Circular", sans-serif;

    &:hover {
      background: var(--primary-spotify-footer-color);
      cursor: pointer;
    }
    border: none;

    & figure {
      width: 2.8rem;
      height: 2.8rem;

      & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    & span.text {
      margin: 0 0.8rem;
      max-width: 11rem;
      pointer-events: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 1.4rem;
      color: white;
      font-weight: 500;
    }

    & span.arrow {
      display: block;
      width: 0;
      height: 0;
      margin-right: 0.6rem;
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      ${props =>
        props.isDropped
          ? "border-bottom: .5rem solid white"
          : "border-top: .5rem solid white"};
    }
  }
`;
