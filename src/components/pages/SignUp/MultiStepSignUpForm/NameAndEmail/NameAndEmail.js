import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUserError } from "../../../../../redux/user/user.selectors";
import InputField from "../../../../shared/InputField/InputField";
import ErrorMessage from "../../../../shared/ErrorMessage/ErrorMessage";

const NameAndEmail = ({ state, handleChange, error }) => {
  const { name, username, email } = state;
  return (
    <React.Fragment>
      <InputField name="name" onChange={handleChange} value={name} />
      {error.name && <ErrorMessage>{error.name}</ErrorMessage>}
      <InputField
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
      <InputField name="username" onChange={handleChange} value={username} />
      {error.username && <ErrorMessage>{error.username}</ErrorMessage>}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectUserError
});

export default connect(mapStateToProps)(NameAndEmail);
