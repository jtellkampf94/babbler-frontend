import styled from "styled-components";

export const PostStyles = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.lineBlue};

  &.allowHover {
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.hover};
    }
  }
`;

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
