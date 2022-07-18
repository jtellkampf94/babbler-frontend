import React from "react";

import {
  Container,
  SecondaryContainer,
  AvatarContainer,
  TextContainer,
  Name,
  Username
} from "./ProfileListItem.styles";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import Button from "../Button/Button";
import history from "../../../utils/history";

const ProfileListItem = ({
  avatarUrl,
  name,
  username,
  alt,
  userId,
  currentUser,
  followers,
  followUser,
  followUserType,
  unfollowUser,
  unfollowUserType
}) => {
  const followersArray = followers.map(follower => {
    if (typeof follower === "object") {
      return follower._id;
    } else {
      return follower;
    }
  });

  const isFollowing = followersArray.includes(currentUser._id);

  const handleClick = e => {
    e.stopPropagation();
    if (isFollowing) {
      unfollowUser({ userId, type: unfollowUserType });
    } else {
      followUser({ userId, type: followUserType });
    }
  };

  const redirectToLogin = e => {
    e.stopPropagation();
    history.push("/login");
  };

  return (
    <Container
      className={alt ? "alt" : ""}
      onClick={() => history.push(`/user/${userId}`)}
    >
      <SecondaryContainer>
        <AvatarContainer>
          <ProfileAvatar avatarUrl={avatarUrl} />
        </AvatarContainer>
        <TextContainer>
          <Name>{name}</Name>
          <Username>@{username}</Username>
        </TextContainer>
      </SecondaryContainer>
      {currentUser._id !== userId && (
        <Button
          listStyle
          inverted={isFollowing}
          onClick={currentUser._id ? handleClick : redirectToLogin}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      )}
    </Container>
  );
};

export default ProfileListItem;
