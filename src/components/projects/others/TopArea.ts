import styled from "styled-components";

export const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    color: ${({ theme }) => theme.colors.green};
    font-size: 42px;
  }
`;

export default TopArea;