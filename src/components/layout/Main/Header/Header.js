import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, withRouter } from "react-router-dom";

import {
  Container,
  Title,
  AvatarContainer,
  BackButtonContainer
} from "./Header.styles";
import ProfileAvatar from "../../../shared/ProfileAvatar/ProfileAvatar";
import BackButton from "../../../shared/BackButton/BackButton";
import ProfileTitle from "../ProfileTitle/ProfileTitle";
import theme from "../../../../config/theme";

const Header = ({
  children,
  avatarUrl,
  match,
  alt,
  profileUser,
  totalPosts
}) => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${theme.small})` });
  const isHomePage = match.path === "/";
  return (
    <Container>
      {!isHomePage && (
        <Link to="/">
          <BackButtonContainer>
            <BackButton fontSize="20px" />
          </BackButtonContainer>
        </Link>
      )}
      {isHomePage && isSmallScreen && (
        <AvatarContainer>
          <ProfileAvatar avatarUrl={avatarUrl} fontSize="32px" />
        </AvatarContainer>
      )}
      {alt ? (
        <Title>
          <ProfileTitle profileUser={profileUser} totalPosts={totalPosts} />
        </Title>
      ) : (
        <Title>{children}</Title>
      )}
    </Container>
  );
};

export default withRouter(Header);
