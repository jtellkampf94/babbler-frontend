import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../../../shared/Button/Button";
import BackButton from "../../../shared/BackButton/BackButton";
import EditHeader from "../EditHeader/EditHeader";
import EditProfilePicture from "../EditProfilePicture/EditProfilePicture";
import {
  Container,
  Form,
  StepsContainer,
  BackButtonContainer
} from "./MultiStepPictureEditForm.styles";
import { updateImages } from "../../../../redux/user/user.actions";
import {
  selectUserError,
  selectCurrentUser
} from "../../../../redux/user/user.selectors";
import useControlledComponent from "../../../../hooks/useControlledComponent";

const MultiStepPictureEditForm = ({
  updateImages,
  user,
  error,
  toggleModal
}) => {
  const [state, handleChange, setState] = useControlledComponent({
    step: 1,
    profilePicture: null,
    headerImage: null
  });

  const { step, profilePicture, headerImage } = state;

  const nextStep = () => {
    setState({ ...state, step: step + 1 });
  };

  const prevStep = () => {
    setState({ ...state, step: step - 1 });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    updateImages({
      userId: user._id,
      profilePicture,
      headerImage,
      toggleModal
    });
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <EditProfilePicture
            user={user}
            error={error}
            state={state}
            setState={setState}
          />
        );
      case 2:
        return (
          <EditHeader
            user={user}
            error={error}
            state={state}
            setState={setState}
          />
        );
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <StepsContainer>
          <BackButtonContainer>
            {step === 2 && <BackButton type="button" onClick={prevStep} />}
          </BackButtonContainer>
          {step === 1 && (
            <Button
              type="button"
              inverted={profilePicture && true}
              onClick={nextStep}
            >
              {profilePicture ? "Next" : "Skip For Now"}
            </Button>
          )}
        </StepsContainer>
        {renderSteps()}
      </Form>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  error: selectUserError
});

const mapDispatchToProps = dispatch => ({
  updateImages: details => dispatch(updateImages(details))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiStepPictureEditForm);
