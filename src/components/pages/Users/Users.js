import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ProfileListItem from "../../shared/ProfileListItem/ProfileListItem";
import Main from "../../layout/Main/Main";
import {
  selectUsers,
  selectCurrentUser
} from "../../../redux/user/user.selectors";
import {
  getUsers,
  followUser,
  unfollowUser
} from "../../../redux/user/user.actions";

const Users = ({ users, getUsers, currentUser, followUser, unfollowUser }) => {
  useEffect(() => {
    getUsers();
  }, [currentUser]);

  return (
    <Main title="Users">
      {users.length > 0 &&
        users.map(user =>
          user._id === currentUser._id ? null : (
            <ProfileListItem
              key={user._id}
              username={user.username}
              name={user.name}
              avatarUrl={user.profilePictureUrl}
              userId={user._id}
              followers={user.followers}
              followUserType="following"
              followUser={followUser}
              unfollowUser={unfollowUser}
              unfollowUserType="unfollowing"
              currentUser={currentUser}
              alt
            />
          )
        )}
    </Main>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  followUser: userId => dispatch(followUser(userId)),
  unfollowUser: userId => dispatch(unfollowUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
