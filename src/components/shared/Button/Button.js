import React from "react";
import ButtonStyles from "./ButtonStyles";

const Button = ({ children, ...props }) => (
  <ButtonStyles {...props}>{children}</ButtonStyles>
);

export default Button;
