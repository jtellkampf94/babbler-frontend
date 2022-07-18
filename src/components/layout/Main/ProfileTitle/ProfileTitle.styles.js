import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span``;

export const Posts = styled.span`
  font-weight: 300;
  color: ${({ theme }) => theme.darkGrey};
  font-size: 13px;
`;
