import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Section, Container, Header, Title } from "./SidebarSection.styles";
import ProfileListItem from "../../../shared/ProfileListItem/ProfileListItem";
import {
  selectUsers,
  selectCurrentUser,
  selectSelectedUser,
  selectUserError
} from "../../../../redux/user/user.selectors";
import {
  getUsers,
  followUser,
  unfollowUser
} from "../../../../redux/user/user.actions";
import { selectPostError } from "../../../../redux/post/post.selectors";

const SidebarSection = ({
  users,
  getUsers,
  currentUser,
  selectedUser,
  followUser,
  unfollowUser,
  error,
  postError
}) => {
  useEffect(() => {
    if (!Object.keys(error).length && !Object.keys(postError).length) {
      getUsers();
    }
  }, [currentUser]);

  return (
    <Section>
      <Container>
        <Header>
          <Title>Who to follow</Title>
        </Header>
        {users.length > 0 &&
          users.map(user =>
            user._id === currentUser._id ? null : (
              <ProfileListItem
                userId={user._id}
                key={user._id}
                username={user.username}
                name={user.name}
                followers={user.followers}
                avatarUrl={user.profilePictureUrl}
                followUser={followUser}
                followUserType={
                  selectedUser._id
                    ? selectedUser._id === currentUser._id
                      ? "follower"
                      : "following"
                    : "none"
                }
                unfollowUser={unfollowUser}
                unfollowUserType={
                  selectedUser._id
                    ? selectedUser._id === currentUser._id
                      ? "unfollower"
                      : "unfollowing"
                    : "none"
                }
                currentUser={currentUser}
              />
            )
          )}
      </Container>
    </Section>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  selectedUser: selectSelectedUser,
  currentUser: selectCurrentUser,
  error: selectUserError,
  postError: selectPostError
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  followUser: details => dispatch(followUser(details)),
  unfollowUser: details => dispatch(unfollowUser(details))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarSection);
