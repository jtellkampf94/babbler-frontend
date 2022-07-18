import React from "react";
import ProfileAvatarPNG from "../../../../assets/images/profile-avatar.png";

import {
  Container,
  ProfileHeaderImage,
  ProfileBorder,
  AvatarContainer
} from "./ProfileDetails.styles";

const ProfileDetails = ({ user }) => {
  return (
    <Container>
      <ProfileHeaderImage
        headerImage={user.headerImageUrl ? user.headerImageUrl : null}
      />
      <ProfileBorder>
        <AvatarContainer
          profilePicture={
            user.profilePictureUrl ? user.profilePictureUrl : ProfileAvatarPNG
          }
        />
      </ProfileBorder>
    </Container>
  );
};

export default ProfileDetails;
