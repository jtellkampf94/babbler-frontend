import React from "react";

import {
  Container,
  AvatarContainer,
  TextContainer,
  Name,
  Username
} from "./UserDetails.styles";
import ProfileAvatar from "../../../shared/ProfileAvatar/ProfileAvatar";

const UserDetails = ({ avatarUrl, name, username }) => {
  return (
    <Container>
      <AvatarContainer>
        <ProfileAvatar avatarUrl={avatarUrl} />
      </AvatarContainer>
      <TextContainer>
        <Name>{name}</Name>
        <Username>@{username}</Username>
      </TextContainer>
    </Container>
  );
};

export default UserDetails;
