import React from "react";
import styled from "styled-components";

import SpinnerIcon from "../../icons/SpinnerIcon/SpinnerIcon";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = ({ width, height, color }) => {
  return (
    <Container>
      <SpinnerIcon width={width} height={height} color={color} />
    </Container>
  );
};

export default Spinner;
