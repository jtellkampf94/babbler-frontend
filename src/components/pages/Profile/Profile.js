import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Main from "../../layout/Main/Main";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfileText from "./ProfileText/ProfileText";
import TabSection from "./TabSection/TabSection";
import {
  selectSelectedUser,
  selectCurrentUser
} from "../../../redux/user/user.selectors";
import { selectPosts } from "../../../redux/post/post.selectors";
import {
  getUserStart,
  followUser,
  unfollowUser,
  clearSelectedUser
} from "../../../redux/user/user.actions";
import { getPostsStart, clearPosts } from "../../../redux/post/post.actions";
import useSpinner from "../../../hooks/useSpinner";
import theme from "../../../config/theme";

const Profile = ({
  user,
  posts,
  getUser,
  getPosts,
  match,
  followUser,
  unfollowUser,
  currentUser,
  clearUser,
  clearPosts
}) => {
  const spinner = useSpinner("32px", "32px", theme.darkGrey);

  useEffect(() => {
    getUser(match.params.userId);
    getPosts(match.params.userId);

    return () => {
      clearUser();
      clearPosts();
    };
  }, [
    match.params.userId,
    currentUser.headerImageUrl,
    currentUser.profilePictureUrl
  ]);

  return (
    <React.Fragment>
      {!user._id ? (
        <Main title="Profile">{spinner}</Main>
      ) : (
        <Main
          avatarUrl={user.profilePictureUrl ? user.profilePictureUrl : null}
          profileUser={user.name}
          totalPosts={posts && posts.length}
          alt
        >
          <ProfileDetails user={user} />
          <ProfileText
            user={user}
            currentUser={currentUser}
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
          <TabSection
            posts={posts && posts}
            user={user}
            currentUser={currentUser}
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
        </Main>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectSelectedUser,
  currentUser: selectCurrentUser,
  posts: selectPosts
});

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(getUserStart(userId)),
  getPosts: userId => dispatch(getPostsStart(userId)),
  followUser: details => dispatch(followUser(details)),
  unfollowUser: details => dispatch(unfollowUser(details)),
  clearUser: () => dispatch(clearSelectedUser()),
  clearPosts: () => dispatch(clearPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
