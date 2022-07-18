import React from "react";
import styled from "styled-components";

import NameAndEmail from "./NameAndEmail/NameAndEmail";
import Password from "./Password/Password";
import Bio from "./Bio/Bio";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

const MultiStepSignUpForm = ({ step, state, handleChange, setState }) => {
  const renderSteps = () => {
    switch (step) {
      case 1:
        return <NameAndEmail state={state} handleChange={handleChange} />;
      case 2:
        return <Bio state={state} handleChange={handleChange} />;
      case 3:
        return <ProfilePicture state={state} setState={setState} />;
      case 4:
        return <Password state={state} handleChange={handleChange} />;
    }
  };

  return <Container>{renderSteps()}</Container>;
};

export default MultiStepSignUpForm;
