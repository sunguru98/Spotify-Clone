import styled from "styled-components";

export default styled.aside`
  background: var(--primary-spotify-sidebar-color);
  min-width: 23.2rem;
  padding: 2.4rem 0;
  flex: 0.2;
  & a.logo {
    display: block;
    margin-bottom: 1.8rem;
  }
  & img {
    height: 4rem;
    padding-left: 2.4rem;
  }
`;
