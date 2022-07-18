import React from "react";
import styled, { css } from "styled-components";

const headerStyles = css`
  padding: 10px;
  font-weight: 700;
  height: 36px;
  margin-right: 10px;
  width: 147px;
  z-index: 1;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.large}) {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 0px;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 0px;
  }
`;

const listStyles = css`
  width: 78px;
`;

const inverted = css`
  background-color: ${({ theme }) => theme.babbler};
  color: ${({ theme }) => theme.white};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.babblerHover};
  }
`;

const cancel = css`
  background-color: ${({ theme }) => theme.mediumGrey};
  color: ${({ theme }) => theme.black};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
    color: ${({ theme }) => theme.black};
  }
`;

const disabled = css`
  opacity: 0.5;
  cursor: default;

  &:hover {
    background-color: ${({ theme }) => theme.babbler};
  }
`;

const getButtonState = props => {
  if (props.disabled) {
    return disabled;
  }

  return;
};

const getButtonStyles = props => {
  if (props.header) {
    return headerStyles;
  }

  if (props.listStyle) {
    return listStyles;
  }

  return;
};

const getButtonColor = props => {
  if (props.inverted) {
    return inverted;
  }

  if (props.cancel) {
    return cancel;
  }

  return;
};

const ButtonStyles = styled.button`
  cursor: pointer;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 10px;
  color: ${({ theme }) => theme.babbler};
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.babbler};
  height: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.babbler};
    color: ${({ theme }) => theme.white};
  }
  ${getButtonStyles}
  ${getButtonColor}
  ${getButtonState}
`;

export default ButtonStyles;
