import styled, { css } from "styled-components";

const ProjectLinksWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    ${({ theme }) => css`
      color: ${theme.colors.slate};
      transition: ${theme.transition};
    `}
    font-size: 23px;

    &:first-child {
      margin-right: 10px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export default ProjectLinksWrapper;