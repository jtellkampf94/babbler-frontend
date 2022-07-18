import React, { useState } from "react";
import { Container } from "./Tabs.styles";

const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectTabIndex = activeIndex => {
    setActiveIndex(activeIndex);
  };

  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      activeIndex,
      onSelectTab: selectTabIndex
    });
  });

  return <Container>{children}</Container>;
};

export default Tabs;
