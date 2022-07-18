import React from "react";

import BackButton from "../../../shared/BackButton/BackButton";
import Button from "../../../shared/Button/Button";
import BabblerIcon from "../../../icons/BabblerIcon/BabblerIcon";
import {
  ContentNavigation,
  LeftColContainer,
  BackButtonContainer,
  IconContainer,
  RightColContainer,
  NextButtonContainer
} from "./SignUpFormNavigation.styles";
import theme from "../../../../config/theme";
import signUpFormValidation from "../../../../validation/signUpFormValidation";

const SignUpFormNavigation = ({ state, prevStep, nextStep, handleSubmit }) => {
  const { step, profilePicture, bio } = state;
  return (
    <ContentNavigation>
      <LeftColContainer>
        <BackButtonContainer>
          {step !== 1 && <BackButton onClick={prevStep} fontSize="36px" />}
        </BackButtonContainer>
      </LeftColContainer>
      <IconContainer>
        <BabblerIcon color={theme.babbler} width="36px" height="36px" />
      </IconContainer>
      <RightColContainer>
        {step === 4 ? (
          <Button type="submit" disabled={signUpFormValidation(state)} inverted>
            Create Account
          </Button>
        ) : (step === 3 && profilePicture === null) ||
          (step === 2 && bio.length === 0) ? (
          <Button
            type="button"
            disabled={signUpFormValidation(state)}
            onClick={nextStep}
            inverted
          >
            Skip For Now
          </Button>
        ) : (
          <NextButtonContainer>
            <Button
              type="button"
              disabled={signUpFormValidation(state)}
              onClick={nextStep}
              inverted
            >
              Next
            </Button>
          </NextButtonContainer>
        )}
      </RightColContainer>
    </ContentNavigation>
  );
};

export default SignUpFormNavigation;
