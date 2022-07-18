import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
`;

export const Form = styled.form``;

export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;

export const FormGroup = styled.div`
  display: flex;
`;

export const Textarea = styled.textarea`
  margin-top: 17px;
  margin-bottom: 18px;
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  border: none;
  resize: none;
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageIcon = styled.i`
  cursor: pointer;
  font-size: 40px;
  color: ${({ theme }) => theme.babbler};
  &:hover {
    color: ${({ theme }) => theme.babblerHover};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const CharacterCount = styled.span`
  color: ${({ theme }) => theme.babbler};

  &.alert {
    color: ${({ theme }) => theme.alertRed};
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CroppedImage = styled.img`
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.lineBlue};
  margin-bottom: 15px;
`;