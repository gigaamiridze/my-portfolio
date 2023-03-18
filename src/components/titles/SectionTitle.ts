import styled, { css } from "styled-components";

const SectionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 26px;
  font-weight: 700;
`;

export default SectionTitle;