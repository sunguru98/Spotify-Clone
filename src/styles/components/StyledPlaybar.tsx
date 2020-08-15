import styled from "styled-components";

export default styled.div<{ isLiked: boolean }>`
  height: 9rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .left,
  & .right {
    width: 30%;
    min-width: 18rem;
  }

  & .left {
    display: flex;
    align-items: center;

    & a:hover {
      text-decoration: underline;
      color: #fff;
    }

    & img {
      max-width: 5.6rem;
      max-height: 5.6rem;
    }

    & .music-info {
      margin: 0 1.4rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & .music-name {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #fff;
        font-size: 1.4rem;
      }

      & .music-composers {
        color: var(--primary-spotify-text-color);
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }
  }

  & .center {
    width: 40%;
    max-width: 72.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .player-buttons {
      display: flex;
      justify-content: space-between;
      width: 22.4rem;
      margin-bottom: 1.2rem;
      & .play {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 500px;
          border: 1px solid hsla(0, 0%, 100%, 0.6);
        }

        &.buffering {
          border: 3px solid transparent;
          &::after {
            top: -2px;
            right: -2px;
            bottom: -2px;
            left: -2px;
            border-top-color: #fff;
            -webkit-animation: circle-spinning 0.65s ease infinite;
            animation: circle-spinning 0.65s ease infinite;
          }

          &:active {
            border-color: hsla(0, 0%, 100%, 0.6);
            border-radius: 50%;
          }
        }
      }
    }

    & .player-playbar {
      width: 100%;
      display: flex;
      align-items: center;
      & span {
        font-size: 1.1rem;
        line-height: 1.6rem;
        min-width: 4rem;
        text-align: center;
      }
    }
  }

  & .right {
    display: flex;
    justify-content: flex-end;
    .volume-bar {
      display: flex;
      align-items: center;
    }
  }

  @keyframes circle-spinning {
    0% {
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    100% {
      -webkit-transform: rotate(315deg);
      transform: rotate(315deg);
    }
  }
`;
