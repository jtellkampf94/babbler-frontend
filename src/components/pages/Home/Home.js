import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Main from "../../layout/Main/Main";
import Post from "../../shared/Post/Post";
import {
  selectCurrentUser,
  selectUserError
} from "../../../redux/user/user.selectors";
import { selectPosts } from "../../../redux/post/post.selectors";
import {
  getPostsFeedStart,
  clearPosts
} from "../../../redux/post/post.actions";
import theme from "../../../config/theme";
import useSpinner from "../../../hooks/useSpinner";

const Home = ({ user, posts, getFeed, clearPosts, error }) => {
  const spinner = useSpinner("32px", "32px", theme.darkGrey);

  useEffect(() => {
    if (!Object.keys(error).length) {
      getFeed();
    }
    return () => clearPosts();
  }, [getFeed, user]);

  return (
    <Main
      title="Home"
      avatarUrl={user.profilePictureUrl ? user.profilePictureUrl : null}
    >
      {posts.length > 0 ? (
        posts.map(post => (
          <Post
            allowHover
            postId={post._id}
            key={post._id}
            avatarUrl={
              post.postedBy.profilePictureUrl
                ? post.postedBy.profilePictureUrl
                : null
            }
            posterId={post.postedBy._id}
            myAvatarUrl={user.profilePictureUrl ? user.profilePictureUrl : null}
            name={post.postedBy.name}
            username={post.postedBy.username}
            date={post.createdAt}
            post={post.text}
            imageUrl={post.imageUrl ? post.imageUrl : null}
            comments={post.comments}
            likes={post.likes}
            deletable={post.postedBy._id === user._id ? true : false}
          />
        ))
      ) : (
        <React.Fragment>{spinner}</React.Fragment>
      )}
    </Main>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  error: selectUserError,
  posts: selectPosts
});

const mapDispatchToProps = dispatch => ({
  getFeed: () => dispatch(getPostsFeedStart()),
  clearPosts: () => dispatch(clearPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
