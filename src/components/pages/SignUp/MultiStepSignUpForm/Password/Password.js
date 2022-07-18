import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUserError } from "../../../../../redux/user/user.selectors";
import InputField from "../../../../shared/InputField/InputField";
import ErrorMessage from "../../../../shared/ErrorMessage/ErrorMessage";

const Password = ({ state, handleChange, error }) => {
  const { password, confirmPassword } = state;
  return (
    <React.Fragment>
      <InputField
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      {error.password && <ErrorMessage>{error.password}</ErrorMessage>}
      <InputField
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        onChange={handleChange}
        value={confirmPassword}
      />
      {error.confirmPassword && (
        <ErrorMessage>{error.confirmPassword}</ErrorMessage>
      )}
      {error.profilePicture && (
        <ErrorMessage>{error.profilePicture}</ErrorMessage>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectUserError
});

export default connect(mapStateToProps)(Password);
