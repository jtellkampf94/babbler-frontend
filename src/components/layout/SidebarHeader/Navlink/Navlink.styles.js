import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  font-size: 19px;
  font-weight: 700;
  border-radius: 25px;
  transition: 100ms ease-in;

  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
    background-color: ${({ theme }) => theme.secondaryBlue};
  }

  @media (max-width: ${({ theme }) => theme.large}) {
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;

  @media (max-width: ${({ theme }) => theme.large}) {
    width: 32px;
    height: 32px;
  }
`;

export const TextContainer = styled.div`
  margin-left: 20px;
  margin-right: 15px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.large}) {
    display: none;
  }
`;
