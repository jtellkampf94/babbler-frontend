import React from "react";
import Moment from "react-moment";

import {
  ContentHeader,
  ProfileContainer,
  AvatarContainer,
  Name,
  Container,
  Username,
  DatePosted
} from "./PostHeader.styles";
import ProfileAvatar from "../../ProfileAvatar/ProfileAvatar";
import Dropdown from "../Dropdown/Dropdown";
import history from "../../../../utils/history";

const PostHeader = ({
  avatarUrl,
  name,
  username,
  date,
  deletable,
  postId,
  posterId
}) => {
  const dateNow = new Date();
  const datePosted = new Date(date);
  const difference = dateNow - datePosted;
  const dayInMs = 1000 * 60 * 60 * 24;
  const diffInDays = difference / dayInMs;

  const linkToProfilePage = e => {
    e.stopPropagation();
    history.push(`/user/${posterId}`);
  };

  return (
    <ContentHeader>
      <ProfileContainer>
        <AvatarContainer onClick={linkToProfilePage}>
          <ProfileAvatar avatarUrl={avatarUrl} />
        </AvatarContainer>
        <Name onClick={linkToProfilePage}>{name}</Name>
      </ProfileContainer>
      <Container>
        <Username onClick={linkToProfilePage}>@{username}</Username>
        <DatePosted>
          {diffInDays < 1 ? (
            <Moment fromNow>{date}</Moment>
          ) : (
            <Moment format="Do MMM YYYY">{date}</Moment>
          )}
        </DatePosted>
        {deletable && <Dropdown postId={postId} />}
      </Container>
    </ContentHeader>
  );
};

export default PostHeader;
