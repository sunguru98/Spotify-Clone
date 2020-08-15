import styled from "styled-components";
import { HTMLAttributes } from "react";
import { ItemCardProps } from "../../components/HomeContentItem";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default styled.div<Props>`
  display: grid;
  grid-gap: 1.6rem;
  overflow-y: hidden;
  grid-auto-rows: 0;

  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(auto-fill, minmax(16.4rem, 1fr));

  & .item-name {
    grid-column: 1/-1;

    & .item-name-wrapper {
      display: flex;
      align-items: center;

      & h2 {
        color: white;
        flex-grow: 1;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 2.8rem;
        letter-spacing: -0.04em;
      }

      & a {
        margin-left: 0.8rem;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.6rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }
    }
  }
`;

export const StyledItemCard = styled.div`
  flex: 1;
  position: relative;
  padding: 2rem 2rem 1.6rem 2rem;
  background: var(--primary-spotify-footer-color);
  border-radius: 0.8rem;
  width: 100%;

  & .image-wrapper {
    width: 100%;
    /* This is for keeping a placeholder untill the image loads */
    padding-bottom: 100%;
    margin-bottom: 1.6rem;
    position: relative;
    box-shadow: 0 1rem 3rem 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    & img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  & .info-wrapper {
    & a {
      color: white;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4rem;
      letter-spacing: normal;
      text-transform: none;
    }

    & span {
      font-size: 1.1rem;
      line-height: 1.6rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 4px;
      white-space: normal;
    }
  }
`;
