import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.lineBlue};
`;

const Label = styled.label`
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.darkGrey};
  font-size: 13px;
  font-weight: 300;
  transition: all 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.darkGrey};
  }

  &:focus {
    font-size: 16px;
  }
`;

const Textarea = styled.textarea`
  border: none;
  color: ${({ theme }) => theme.darkGrey};
  font-size: 13px;
  font-weight: 300;
  transition: all 0.3s;
  height: 60px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.darkGrey};
  }

  &:focus {
    font-size: 16px;
  }
`;

const WordCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AlertText = styled.span`
  color: ${({ theme }) => theme.alertRed};
  font-size: 13px;
  font-weight: 300;
`;

const Field = ({ label, name, handleChange, value, type = "text", errors }) => (
  <FormGroup>
    <Label htmlFor={name}>{label}</Label>
    {type === "textarea" ? (
      <React.Fragment>
        <Textarea
          autoComplete="false"
          id={name}
          name={name}
          onChange={handleChange}
          value={value}
          placeholder={label}
        />
        <WordCountContainer>
          {errors && <AlertText>{errors}</AlertText>}
          <AlertText>{value.length}/160</AlertText>
        </WordCountContainer>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Input
          autoComplete="false"
          id={name}
          type={type}
          name={name}
          onChange={handleChange}
          value={value}
          placeholder={label}
        />
        {errors && <AlertText>{errors}</AlertText>}
      </React.Fragment>
    )}
  </FormGroup>
);

export default Field;
