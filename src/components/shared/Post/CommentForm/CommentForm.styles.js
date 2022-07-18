import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: none;

  font-size: 16px;
  border-color: ${({ theme }) => theme.lineBlue};
  padding: 5px;
  margin-bottom: 5px;
  margin-right: 5px;

  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.darkGrey};
    font-weight: 300;
    font-size: 13px;
  }

  &:focus {
    &::placeholder {
      color: ${({ theme }) => theme.lineBlue};
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.babbler};
  font-weight: 700;
  font-size: 16px;
  opacity: ${props => props.opacity};
`;
