import React from "react";
import styled from "styled-components";

const Box1 = styled.div`
  width: 100vw;
`;
const Box2 = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  position: fixed;
  top: calc(100% - 100px);
  left: 0;
  z-index: 1000;
`;
const Box3 = styled.div`
  width: 500px;
  height: 1500px;
  background-color: blue;
`;
const Box4 = styled.div`
  width: 500px;
  height: 500px;
  background-color: orange;
`;

const Example = () => {
  return (
    <Box1>
      <Box2 />
      <Box3 />
      <Box4 />
    </Box1>
  );
};

export default Example;
