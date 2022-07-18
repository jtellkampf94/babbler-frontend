import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  Header,
  NavContainer,
  Nav,
  ButtonContainer,
  Icon,
  ButtonText,
  LinksContainer
} from "./SidebarHeader.styles";
import NavLink from "./Navlink/Navlink";
import Logo from "./Logo/Logo";
import HomeIcon from "../../icons/HomeIcon/HomeIcon";
import UsersIcon from "../../icons/UsersIcon/UsersIcon";
import ProfileIcon from "../../icons/ProfileIcon/ProfileIcon";
import SettingsIcon from "../../icons/SettingsIcon/SettingsIcon";
import SignoutIcon from "../../icons/SignoutIcon/SignoutIcon";
import LogInIcon from "../../icons/LogInIcon/LogInIcon";
import Button from "../../shared/Button/Button";
import UserDetails from "./UserDetails/UserDetails";
import Modal from "../../shared/Modal/Modal";
import PostForm from "./PostForm/PostForm";
import ConfirmSignOut from "./ConfirmSignOut/ConfirmSignOut";
import theme from "../../../config/theme";
import useModal from "../../../hooks/useModal";

const SidebarHeader = ({ match, user }) => {
  const isLargeScreen = useMediaQuery({ query: `(max-width: ${theme.large})` });
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${theme.small})` });
  const size = isSmallScreen ? "22px" : isLargeScreen ? "25px" : "20px";
  const location = useLocation();
  const [showModal, toggleModal] = useModal();
  const [showPostForm, togglePostForm] = useState(false);

  useEffect(() => {
    if (!showModal) {
      togglePostForm(false);
    }
  }, [showModal]);

  const handlePost = () => {
    togglePostForm(true);
    toggleModal();
  };

  const handleSignOut = () => {
    toggleModal();
  };

  const renderLinks = () => (
    <LinksContainer>
      {!isSmallScreen && <Logo />}
      <NavLink path="/" text="Home">
        <HomeIcon width={size} height={size} color={theme.black} />
      </NavLink>
      <NavLink path="/users" text="Users">
        <UsersIcon width={size} height={size} color={theme.black} />
      </NavLink>
      {user._id && (
        <React.Fragment>
          <NavLink path={`/user/${user._id}`} text="Profile">
            <ProfileIcon width={size} height={size} color={theme.black} />
          </NavLink>
          <NavLink path="/user/settings" text="Settings">
            <SettingsIcon width={size} height={size} color={theme.black} />
          </NavLink>
        </React.Fragment>
      )}
      {user._id ? (
        <NavLink
          onClick={handleSignOut}
          path={location.pathname}
          text="Sign Out"
          name="signOut"
        >
          <SignoutIcon width={size} height={size} color={theme.black} />
        </NavLink>
      ) : (
        <NavLink path="/login" text="Log In">
          <LogInIcon width={size} height={size} color={theme.black} />
        </NavLink>
      )}
    </LinksContainer>
  );

  const renderActions = () => (
    <React.Fragment>
      <ButtonContainer>
        <Button header inverted onClick={handlePost}>
          <Icon className="far fa-edit" />
          <ButtonText>Post</ButtonText>
        </Button>
      </ButtonContainer>
      {!isSmallScreen && (
        <React.Fragment>
          <UserDetails
            name={user.name}
            username={user.username}
            avatarUrl={user.profilePictureUrl ? user.profilePictureUrl : null}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );

  return (
    <Header>
      <NavContainer>
        <Nav>{renderLinks()}</Nav>
        {user._id && renderActions()}
      </NavContainer>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          {showPostForm ? (
            <PostForm toggleModal={toggleModal} />
          ) : (
            <ConfirmSignOut toggleModal={toggleModal} />
          )}
        </Modal>
      )}
    </Header>
  );
};

export default SidebarHeader;
