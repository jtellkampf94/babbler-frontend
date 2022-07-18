import React from "react";
import { Container } from "./TabPanels.styles";

const TabPanels = ({ activeIndex, children }) => {
  return <Container>{children[activeIndex]}</Container>;
};

export default TabPanels;
