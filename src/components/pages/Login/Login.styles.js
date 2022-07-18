import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 60%;
  height: 60%;
  padding: 15px;
  margin-top: 5%;
  border: 1px solid ${({ theme }) => theme.lineBlue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.modalBreakPoint}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 90%;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const Header = styled.h1`
  margin-top: 15px;
  font-size: 23px;
`;

export const FormContent = styled.div`
  width: 70%;

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 90%;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Text = styled.span`
  font-size: 13px;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGrey};

  &:hover {
    text-decoration: underline;
  }
`;
