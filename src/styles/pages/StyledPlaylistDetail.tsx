import styled from "styled-components";

export const StyledSongListItem = styled.li<{ isPlaying: boolean }>`
  display: flex;
  height: 4.56em;
  position: relative;
  transition: background-color 0.2s;

  &:hover {
    background: hsla(0, 0%, 100%, 0.1);
    cursor: pointer;

    & .additional-option-container {
      display: block;
    }
  }

  .icon-container,
  .song-detail-container,
  .duration-container,
  .additonal-option-container {
    margin-top: 0.7em;
  }

  & .icon-container {
    text-align: right;
    height: 100%;
    padding-right: 1em;
    width: 3em;
    margin-top: 0.9em;

    & svg {
      width: 1em;
      height: 1em;

      path {
        fill: ${props =>
          props.isPlaying ? "var(--secondary-spotify-color)" : "#fff"};
      }
    }

    & .music span {
      color: ${props =>
        props.isPlaying ? "var(--secondary-spotify-color)" : "#fff"};
      &::before {
        content: "";
        font-size: 1.6rem;
      }
    }
  }

  & .song-detail-container {
    flex: 1;
    p {
      font-size: 1.6rem;
      line-height: 2.2rem;
      letter-spacing: 0.015em;
      color: ${props =>
        !props.isPlaying ? "white" : "var(--secondary-spotify-color)"};
    }

    span.artist-media {
      display: inline-block;
      & a {
        color: #fff;
        font-size: 1.4rem;
        line-height: 2rem;
        letter-spacing: 0.015em;
        opacity: 0.6;
        &:hover {
          text-decoration: underline;
          opacity: 1;
        }

        &:first-child {
          margin-right: 0.7em;
        }
        &:last-child {
          margin-left: 0.7em;
        }
      }
    }
  }

  & .duration-container {
    padding-right: 1.4rem;
    color: ${props =>
      !props.isPlaying ? "white" : "var(--secondary-spotify-color)"};
  }

  & .additional-option-container {
    height: 4.56em;
    padding-right: 1em;
    text-align: right;
    min-width: 6.5rem;
    display: flex;
    align-items: center;
    display: none;

    & button {
      background: transparent;
      border: none;
      color: white;
      font-size: 1.2rem;
      line-height: 1.8rem;
      font-weight: 500;
      letter-spacing: 0.176rem;
      text-align: center;
      padding: 0.8rem 3.4rem;
      display: inline-block;
      white-space: nowrap;
      cursor: pointer;
      &::before {
        content: "";
        font-size: 1.6rem;
      }
    }
  }
`;

export default styled.section`
  position: absolute;
  top: 0;
  left: 0;
  isolation: isolate;
  width: 100%;

  & .shadow-gradient {
    background: rgb(83, 83, 83);
    background-image: none;
    height: 23.2rem;
    position: absolute;
    z-index: -1;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), #121212);
  }

  & .playlist-songs {
    padding: 0 3.2rem;
    max-width: 195.5rem;
    font-size: 1.4rem;
  }

  & .playlist-controls {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 195.5rem;
    padding: 2.4rem 3.2rem;

    & button {
      border: none;
      &:hover {
        cursor: pointer;
      }
    }

    &-play {
      background: var(--secondary-spotify-color);
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 3.2rem;

      & svg {
        height: 2.8rem;
        width: 2.8rem;
        & polygon {
          fill: #fff;
        }
      }
    }

    & .spoticon {
      background: transparent;
      color: rgba(255, 255, 255, 0.6);
      &:hover {
        color: white;
      }
      &::before {
        content: "";
        font-size: 3.2rem;
      }
    }
  }
`;
