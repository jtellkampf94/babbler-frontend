import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  padding: 15px 15px;
  height: 70px;
  width: 70px;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryBlue};
    border-radius: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.large}) {
    justify-content: center;
  }
`;
