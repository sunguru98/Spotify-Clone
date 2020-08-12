import styled from "styled-components";

export default styled.li`
  color: white;
  padding: 0 0.8rem;
  line-height: 4rem;
  font-size: 1.4rem;
  font-weight: 500;

  & a {
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    color: #b3b3b3 !important;
    transition: color 0.3s;

    &:hover,
    &.active {
      color: #fff !important;
    }

    &.active {
      background: #282828;
      border-radius: 0.4rem;
    }

    & svg {
      margin-right: 1.6rem;
    }
  }

  & span {
  }
`;
