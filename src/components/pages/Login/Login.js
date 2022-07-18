import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import {
  Container,
  FormContainer,
  FormHeader,
  Header,
  FormContent,
  Form,
  ButtonContainer,
  Text
} from "./Login.styles";
import Button from "../../shared/Button/Button";
import ErrorMessage from "../../shared/ErrorMessage/ErrorMessage";
import BabblerIcon from "../../icons/BabblerIcon/BabblerIcon";
import theme from "../../../config/theme";
import useControlledComponent from "../../../hooks/useControlledComponent";
import InputField from "../../shared/InputField/InputField";
import { selectAuthError } from "../../../redux/auth/auth.selectors";
import { signInStart } from "../../../redux/auth/auth.actions";

const Login = ({ error, signIn }) => {
  const [state, handleChange, setState] = useControlledComponent({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    signIn(state);
  };

  return (
    <Container>
      <FormContainer>
        <FormHeader>
          <BabblerIcon color={theme.babbler} height="50px" width="50px" />
          <Header>Log in to Babbler</Header>
        </FormHeader>
        <FormContent>
          <Form noValidate onSubmit={handleSubmit}>
            <InputField type="email" name="email" onChange={handleChange} />
            {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
            <InputField
              type="password"
              name="password"
              onChange={handleChange}
            />
            {error.password && <ErrorMessage>{error.password}</ErrorMessage>}
            <ButtonContainer>
              <Button inverted>Log In</Button>
            </ButtonContainer>
            <Link to="/sign-up">
              <Text>Sign up for Babbler</Text>
            </Link>
          </Form>
        </FormContent>
      </FormContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectAuthError
});

const mapDispatchToProps = dispatch => ({
  signIn: emailAndPassword => dispatch(signInStart(emailAndPassword))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
