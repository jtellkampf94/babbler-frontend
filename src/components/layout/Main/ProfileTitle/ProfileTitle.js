import React from "react";
import { TitleContainer, Name, Posts } from "./ProfileTitle.styles";

const ProfileTitle = ({ profileUser, totalPosts }) => {
  return (
    <TitleContainer>
      <Name>{profileUser}</Name>
      <Posts>{totalPosts} Posts</Posts>
    </TitleContainer>
  );
};

export default ProfileTitle;
