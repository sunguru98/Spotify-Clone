import styled from "styled-components";

export default styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  flex: 0 1 36.4rem;
  border-radius: 50rem;
  overflow: hidden;
  background: white;
  position: relative;

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.2rem;
    color: var(--primary-spotify-body-color);
    right: 1.2rem;
  }

  & input {
    width: 100%;
    height: 4rem;
    padding: 0.6rem 4.4rem;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.015em;
    &,
    &:focus {
      border: none;
      outline: none;
    }
  }
`;
