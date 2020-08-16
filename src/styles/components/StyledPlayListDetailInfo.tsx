import styled from "styled-components";

export default styled.div`
  padding: 0 3.2rem 2.4rem;
  overflow: hidden;
  min-height: 34rem;
  max-height: 50rem;
  height: 30vh;
  position: relative;

  display: flex;
  align-items: flex-end;

  & .cover {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  & .background-1 {
    background: rgb(83, 83, 83);
  }

  & .background-2 {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  }

  & .playlist-image {
    width: 19.2rem;
    margin-right: 2.4rem;

    & img {
      width: 100%;
      height: 19.2rem;
      box-shadow: 0 0.4rem 6rem rgba(0, 0, 0, 0.5);
    }
  }

  & .playlist-meta {
    font-weight: 500;
    h4 {
      font-size: 1.2rem;
      margin-top: 0.4rem;
      text-transform: uppercase;
      line-height: 1.6rem;
      color: #fff;
    }

    &-name {
      font-size: 7.2rem;
      color: white;

      line-height: 7.2rem;
      padding: 0.08em 0;
      visibility: visible;
      letter-spacing: -0.04em;
    }

    &-description {
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 1.6rem;
      margin-top: 0.8rem;
      color: hsla(0, 0%, 100%, 0.7);
    }
  }

  & .playlist-creator {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0.8rem;

    & a,
    & span {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0.015em;
    }

    & a {
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }

    & span {
      &.bulleted::before {
        content: "•";
        margin: 0 0.4rem;
        color: hsla(0, 0%, 100%, 0.7);
        white-space: nowrap;
      }
      font-weight: normal;
    }
  }
`;
