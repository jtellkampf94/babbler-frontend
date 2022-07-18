import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const DataTabList = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
`;

const ProfileData = () => {
  return (
    <Container>
      <DataTabList></DataTabList>
    </Container>
  );
};

export default ProfileData;
