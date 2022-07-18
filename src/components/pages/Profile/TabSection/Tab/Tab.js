import React from "react";
import { Container } from "./Tab.styles";

const Tab = ({ isActive, children, onSelect }) => {
  const isDisabled = false;

  return (
    <Container
      className={isDisabled ? "disabled" : isActive ? "active" : ""}
      onClick={isDisabled ? null : onSelect}
    >
      {children}
    </Container>
  );
};

export default Tab;
