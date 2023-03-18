import styled, { css } from "styled-components";

const MadeAt = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 15px;
  font-weight: 400;
`;

export default MadeAt;