import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: 300;
  color: ${({ theme }) => theme.black};
`;

const Textarea = styled.textarea`
  font-size: 16px;
  width: 100%;
  resize: none;
  border: 1px solid ${({ theme }) => theme.lineBlue};
  padding: 5px;
  margin-top: 5px;

  &::placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.darkGrey};
  }

  &:focus {
    border-color: ${({ theme }) => theme.babbler};
  }
`;

const TextareaField = ({ name, ...restProps }) => {
  return (
    <FormGroup>
      <Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Label>
      <Textarea name={name} {...restProps} />
    </FormGroup>
  );
};

export default TextareaField;
