import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-style: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryBlue};
  }
`;

const BackIcon = styled.i`
  color: ${({ theme }) => theme.babbler};
  font-size: ${props => props.fontSize};
`;

const BackButton = ({ fontSize, ...restProps }) => {
  return (
    <Button {...restProps}>
      <BackIcon fontSize={fontSize} className="fas fa-arrow-left" />
    </Button>
  );
};

export default BackButton;
