import styled from "styled-components";

export default styled.div`
  margin-top: 2.4rem;

  & h2 {
    max-width: 18.4rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    font-weight: 500;
    margin: 0 auto 1.2rem auto;
  }

  & hr {
    margin: 0.8rem 2.4rem;
    height: 1px;
    background: var(--primary-spotify-footer-color);
    border: none;
  }

  & ul li {
    padding: 0 2.4rem;
    font-size: 1.4rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #fff;
    }

    & a {
      color: var(--primary-spotify-color);
      font-weight: medium;
      margin-right: .5rem;
    }
  }
`;
