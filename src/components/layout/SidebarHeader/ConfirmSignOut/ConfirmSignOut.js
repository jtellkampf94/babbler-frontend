import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { signOutStart } from "../../../../redux/auth/auth.actions";
import Button from "../../../shared/Button/Button";

const Container = styled.div``;

const TextContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  margin-bottom: 15px;
  font-size: 23px;
`;

const Text = styled.span``;

const ButtonsContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.lineBlue};
`;

const ConfirmSignOut = ({ toggleModal, signOut }) => {
  return (
    <Container>
      <TextContainer>
        <Header>Sign Out?</Header>
        <Text>Are you sure you want to sign out?</Text>
      </TextContainer>
      <ButtonsContainer>
        <Button
          inverted
          onClick={() => {
            signOut();
            toggleModal();
          }}
        >
          Yes
        </Button>
        <Button cancel onClick={toggleModal}>
          No
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
});

export default connect(null, mapDispatchToProps)(ConfirmSignOut);
