import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface StyledSpoticonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  activeIcon?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  activeColor?: string;
}

export default styled.button<StyledSpoticonProps>`
  background: transparent;
  width: 3.2rem;
  min-width: 3.2rem;
  height: 3.2rem;
  border: none;
  color: var(--primary-spotify-text-color);
  &:hover, &:active {
    cursor: pointer;
    ${props => (!props.isActive ? "color: #fff" : "")};
  }
  &::before {
    font-size: 1.6rem;
    content: "${({ isActive, icon, activeIcon }) =>
      !isActive ? icon : activeIcon}";
  }

  ${({ isActive, activeColor }) => {
    if (isActive) {
      if (activeColor) {
        return `color: ${activeColor};`;
      } else {
        return `color: currentColor;`;
      }
    }
  }}

  ${props =>
    props.disabled &&
    "color: #535353 !important; cursor: not-allowed !important;"};
`;
