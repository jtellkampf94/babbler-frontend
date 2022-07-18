import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Field from "./Field/Field";
import useControlledComponent from "../../../../hooks/useControlledComponent";
import Button from "../../../shared/Button/Button";
import {
  selectCurrentUser,
  selectUserError
} from "../../../../redux/user/user.selectors";
import { editUserStart } from "../../../../redux/user/user.actions";
import { Container, Form, ButtonContainer } from "./EditProfileForm.styles";

const EditProfileForm = ({ user, error, editUser }) => {
  const [state, handleChange, setState] = useControlledComponent({
    name: "",
    username: "",
    bio: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [passwordFields, setPasswordFields] = useState(false);

  const {
    name,
    username,
    email,
    currentPassword,
    newPassword,
    confirmPassword,
    bio
  } = state;

  useEffect(() => {
    if (user._id) {
      setState({
        ...state,
        name: user.name,
        username: user.username,
        email: user.email,
        bio: user.bio ? user.bio : ""
      });
    }
  }, [user]);

  const handleClick = () => {
    setPasswordFields(!passwordFields);
  };

  const handleSubmit = e => {
    e.preventDefault();
    editUser({ credentials: { ...state }, userId: user._id });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Field
          label="Name"
          name="name"
          handleChange={handleChange}
          value={name}
          errors={error.name ? error.name : null}
        />
        <Field
          label="Username"
          name="username"
          handleChange={handleChange}
          value={username}
          errors={error.username ? error.username : null}
        />
        <Field
          label="Email"
          name="email"
          handleChange={handleChange}
          value={email}
          type="email"
          errors={error.email ? error.email : null}
        />
        <Field
          label="Bio"
          name="bio"
          handleChange={handleChange}
          value={bio}
          type="textarea"
          errors={error.bio ? error.bio : null}
        />
        {(passwordFields ||
          error.currentPassword ||
          error.newPassword ||
          error.confirmPassword) && (
          <React.Fragment>
            <Field
              label="Current Password"
              name="currentPassword"
              handleChange={handleChange}
              value={currentPassword}
              type="password"
              errors={error.currentPassword ? error.currentPassword : null}
            />
            <Field
              label="New Password"
              name="newPassword"
              handleChange={handleChange}
              value={newPassword}
              type="password"
              errors={error.newPassword || error.password ? error.newPassword ? error.newPassword : error.password : null}
            />
            <Field
              label="Confirm Password"
              name="confirmPassword"
              handleChange={handleChange}
              value={confirmPassword}
              type="password"
              errors={error.confirmPassword ? error.confirmPassword : null}
            />
          </React.Fragment>
        )}
        <ButtonContainer>
          <Button onClick={handleClick} type="button">
            {passwordFields ? "Cancel" : "Change Password"}
          </Button>
          <Button type="submit" inverted>
            Submit
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  error: selectUserError
});

const mapDispatchToProps = dispatch => ({
  editUser: details => dispatch(editUserStart(details))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
