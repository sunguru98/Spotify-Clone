import styled from "styled-components";

export const StyledSearchListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  transition: all 0.3s;
  margin: 1rem 0;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
  }

  &:hover {
    background: var(--primary-spotify-footer-color);
    .cover-pic-container .button-container {
      opacity: 1;
    }
  }

  & .cover-pic-container {
    height: 7.2rem;
    width: 7.2rem;
    margin-right: 1.6rem;
    position: relative;
    padding-bottom: 7.2rem;

    & img {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & .button-container {
      position: absolute;
      height: 7.2rem;
      width: 7.2rem;
      top: 0;
      left: 0;
      z-index: 2;
      opacity: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;

      & button {
        border-radius: 50%;
        width: 3.2rem;
        height: 3.2rem;
        background: var(--secondary-spotify-color);
        color: #fff;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  & .menu-container {
    margin-left: auto;
    background: transparent;
    color: white;
    margin-right: 1.6rem;
    border-radius: 50%;

    &:hover {
      background: #121212;
      cursor: pointer;
    }
  }

  & .song-detail-container {
    font-size: 1.4rem;
    a {
      line-height: 2rem;
      &:hover {
        text-decoration: underline;
      }
    }
    a.name {
      color: white;
      font-weight: 300;
    }
  }
`;

export default styled.section`
  h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.8rem;
    letter-spacing: -0.04em;
    text-transform: none;
    color: white;
  }
`;
