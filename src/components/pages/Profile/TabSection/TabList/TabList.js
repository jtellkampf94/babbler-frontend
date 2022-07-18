import React from "react";
import { Container } from "./TabList.styles";

const TabList = props => {
  const { activeIndex } = props;
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      isActive: activeIndex === index,
      onSelect: () => props.onSelectTab(index)
    });
  });
  return <Container>{children}</Container>;
};

export default TabList;
