import styled, { css } from "styled-components";
import { OpenProps } from "../../interfaces";

const BurgerButton = styled.div<OpenProps>`
  width: 36px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  span {
    ${({ theme }) => css`
      background-color: ${theme.colors.green};
      transition: ${theme.transition};
    `}
    height: 2px;
    border-radius: 5px;
    transform-origin: 1px;

    &:nth-child(1) {
      ${({ isOpen }) => css`
        width: ${isOpen ? "30px" : "100%"};
        transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
      `}
    }
    &:nth-child(2) {
      width: 30px;
      transform: ${({ isOpen }) => isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    }
    &:nth-child(3) {
      ${({ isOpen }) => css`
        width: ${isOpen ? "30px" : "24px"};
        transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
      `}
    }
  }
`;

export default BurgerButton;