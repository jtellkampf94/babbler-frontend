import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Label = styled.label`
  font-weight: 300;
  color: ${({ theme }) => theme.black};
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.lineBlue};
  padding-right: 5px;
  padding-left: 5px;
  margin-top: 5px;
  &::placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.darkGrey};
  }

  &:focus {
    border-color: ${({ theme }) => theme.babbler};
  }
`;

const InputField = ({ name, label, ...restProps }) => {
  return (
    <FormGroup>
      <Label>
        {label ? label : name.charAt(0).toUpperCase() + name.slice(1)}
      </Label>
      <Input name={name} {...restProps} />
    </FormGroup>
  );
};

export default InputField;
