import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Content,
  ContentHeader,
  Header,
  Form
} from "./SignUp.styles";
import Modal from "../../shared/Modal/Modal";
import SignUpFormNavigation from "./SignUpFormNavigation/SignUpFormNavigation";
import MultiStepSignUpForm from "./MultiStepSignUpForm/MultiStepSignUpForm";
import useControlledComponent from "../../../hooks/useControlledComponent";
import { signUpStepStart } from "../../../redux/user/user.actions";
import Main from "../../layout/Main/Main";

const SignUp = ({ history, submitStep }) => {
  const [state, handleChange, setState] = useControlledComponent({
    step: 1,
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    profilePicture: null
  });

  const { step } = state;

  const nextStep = () => {
    if (step === 3) {
      setState({ ...state, step: step + 1 });
    } else {
      submitStep({
        ...state,
        nextStep: () => setState({ ...state, step: step + 1 })
      });
    }
  };

  const prevStep = () => {
    setState({ ...state, step: step - 1 });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("state", state);
    submitStep(state);
  };

  return (
    <Main title="Home">
      <Container>
        <Modal toggleModal={() => history.push("/")}>
          <Content>
            <Form onSubmit={handleSubmit}>
              <ContentHeader>
                <SignUpFormNavigation
                  state={state}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
                <Header>Create Your Account</Header>
              </ContentHeader>
              <MultiStepSignUpForm
                step={step}
                state={state}
                handleChange={handleChange}
                setState={setState}
              />
            </Form>
          </Content>
        </Modal>
      </Container>
    </Main>
  );
};

const mapDispatchToProps = dispatch => ({
  submitStep: payload => dispatch(signUpStepStart(payload))
});

export default connect(null, mapDispatchToProps)(SignUp);
