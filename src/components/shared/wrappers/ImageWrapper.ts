import styled, { css } from "styled-components";
import { ContentPosition } from "../../../interfaces";

const ImageWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    box-shadow: ${theme.boxShadow};
  `}
  border-radius: 4px;

  &:hover {
    background-color: inherit;
  }

  &:hover img {
    mix-blend-mode: inherit;
    filter: inherit;
  }
`;

export const ProfileImgWrapper = styled(ImageWrapper)`
  max-width: 300px;
  width: 100%;
  height: 300px;
  position: relative;

  @media (max-width: 500px) {
    max-width: 270px;
    height: 270px;
  }

  @media (max-width: 420px) {
    max-width: 240px;
    height: 240px;
  }

  @media (max-width: 375px) {
    max-width: 220px;
    height: 220px;
  }

  @media (max-width: 320px) {
    max-width: 180px;
    height: 180px;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    outline: 2px solid ${({ theme }) => theme.colors.green};
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: -1;
    transition: ${({ theme }) => theme.transition};
  }

  &:hover::after {
    top: 13px;
    left: 13px;
  }
`;

export const ProjectImgWrapper = styled(ImageWrapper)<ContentPosition>`
  width: 560px;
  height: 100%;
  position: absolute;
  top: 0;
  ${props => !props.isLeft ? "left" : "right"}: 0;
`;