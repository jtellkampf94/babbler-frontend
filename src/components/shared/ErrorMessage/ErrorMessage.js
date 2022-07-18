import React from "react";
import { ErrorStyles } from "./ErrorMessage.styles";

const ErrorMessage = ({ children }) => {
  return <ErrorStyles>{children}</ErrorStyles>;
};

export default ErrorMessage;
