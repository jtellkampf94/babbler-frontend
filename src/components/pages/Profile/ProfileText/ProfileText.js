import React from "react";
import Moment from "react-moment";

import {
  Container,
  TextContainer,
  Name,
  Username,
  ButtonContainer,
  Bio,
  JoinedText,
  FollowText,
  CalendarIcon,
  Numbers,
  FollowContainer,
  Followers,
  Following,
  Joined
} from "./ProfileText.styles";
import Button from "../../../shared/Button/Button";
import Modal from "../../../shared/Modal/Modal";
import useModal from "../../../../hooks/useModal";
import history from "../../../../utils/history";
import MultiStepPictureEditForm from "../MultiStepPictureEditForm/MultiStepPictureEditForm";

const ProfileText = ({ user, followUser, unfollowUser, currentUser }) => {
  const { _id, name, username, bio, createdAt, following, followers } = user;

  const followersArray = followers.map(follower => follower._id);
  const isFollowing = followersArray.includes(currentUser._id);
  const isUser = _id === currentUser._id;

  const handleClick = () => {
    if (isFollowing) {
      unfollowUser({ userId: _id, type: "unfollowing" });
    } else {
      followUser({ userId: _id, type: "following" });
    }
  };

  const redirectToLogin = () => {
    history.push("/login");
  };

  const [showModal, toggleModal] = useModal();

  return (
    <Container>
      <TextContainer>
        <Name>{name}</Name>
        <Username>@{username}</Username>
        {bio && <Bio>{bio}</Bio>}
        <Joined>
          <CalendarIcon className="far fa-calendar-alt" />
          <JoinedText>
            Joined <Moment format="MMM YYYY">{createdAt}</Moment>
          </JoinedText>
        </Joined>
        <FollowContainer>
          <Following>
            <Numbers>{following.length}</Numbers>
            <FollowText>Following</FollowText>
          </Following>
          <Followers>
            <Numbers>{followers.length}</Numbers>
            <FollowText>Followers</FollowText>
          </Followers>
        </FollowContainer>
      </TextContainer>
      <ButtonContainer>
        {isUser ? (
          <Button onClick={toggleModal}>Design Profile</Button>
        ) : (
          <Button
            listStyle
            inverted={isFollowing}
            onClick={currentUser._id ? handleClick : redirectToLogin}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        )}
      </ButtonContainer>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <MultiStepPictureEditForm toggleModal={toggleModal} />
        </Modal>
      )}
    </Container>
  );
};

export default ProfileText;
