import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import { selectUserError } from "../../../../../redux/user/user.selectors";
import TextareaField from "../../../../shared/TextareaField/TextareaField";
import ErrorMessage from "../../../../shared/ErrorMessage/ErrorMessage";

const Container = styled.div`
  display: flex;
`;

const CharacterCount = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.babbler};

  &.alert {
    color: ${({ theme }) => theme.alertRed};
  }
`;

const Bio = ({ state, handleChange, error }) => {
  const { bio } = state;
  const maxChar = 160;
  const maxCharExceeded = bio.length > maxChar;
  return (
    <React.Fragment>
      <TextareaField
        name="bio"
        onChange={handleChange}
        value={bio}
        rows="6"
        placeholder="Tell us about yourself..."
      />
      <Container>
        <CharacterCount className={`${maxCharExceeded && "alert"}`}>
          {bio.length}/{maxChar}
        </CharacterCount>
      </Container>
      {maxCharExceeded && (
        <ErrorMessage>
          You have exceeded the {maxChar} character word limit for your Babbler
          bio
        </ErrorMessage>
      )}
      {error.bio && <ErrorMessage>{error.bio}</ErrorMessage>}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectUserError
});

export default connect(mapStateToProps)(Bio);
