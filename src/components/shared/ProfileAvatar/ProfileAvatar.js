import React from "react";
import styled from "styled-components";

import ProfileAvatarPNG from "../../../assets/images/profile-avatar.png";

const AvatarDiv = styled.div`
  background-image: url(${props => props.profilePicture});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ProfileAvatar = ({ avatarUrl }) => {
  return (
    <AvatarDiv profilePicture={avatarUrl ? avatarUrl : ProfileAvatarPNG} />
  );
};

export default ProfileAvatar;
