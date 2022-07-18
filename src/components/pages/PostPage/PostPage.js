import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getPostStart, uncommentPost } from "../../../redux/post/post.actions";
import { selectCurrentPost } from "../../../redux/post/post.selectors";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { PostStyles, Container } from "../../shared/Post/Post.styles";
import Main from "../../layout/Main/Main";
import PostHeader from "../../shared/Post/PostHeader/PostHeader";
import PostContent from "../../shared/Post/PostContent/PostContent";
import PostDetails from "./PostDetails/PostDetails";
import CommentActions from "./CommentActions/CommentActions";

const PostPage = ({ match, user, getPost, post, uncommentPost }) => {
  useEffect(() => {
    getPost(match.params.postId);
  }, [match.params.postId]);
  return (
    <Main profileUser="Post" alt>
      {post._id && (
        <React.Fragment>
          <PostStyles>
            <Container>
              <PostHeader
                avatarUrl={post.postedBy.profilePictureUrl}
                name={post.postedBy.name}
                username={post.postedBy.username}
                date={post.createdAt}
                deletable={post.postedBy._id === user._id}
                postId={post._id}
              />

              <PostContent post={post.text} imageUrl={post.imageUrl}>
                <PostDetails
                  comments={post.comments.length}
                  likes={post.likes.length}
                  date={post.createdAt}
                />
              </PostContent>
            </Container>
          </PostStyles>
          {post.comments.length > 0 &&
            post.comments.map(comment => (
              <PostStyles key={comment._id}>
                <Container>
                  <PostHeader
                    avatarUrl={comment.postedBy.profilePictureUrl}
                    name={comment.postedBy.name}
                    username={comment.postedBy.username}
                    date={comment.created}
                  />
                  <PostContent post={comment.text} imageUrl={comment.imageUrl}>
                    <CommentActions
                      deletable={user._id === comment.postedBy._id}
                      commentId={comment._id}
                      uncommentPost={uncommentPost}
                      postId={post._id}
                    />
                  </PostContent>
                </Container>
              </PostStyles>
            ))}
        </React.Fragment>
      )}
    </Main>
  );
};

const mapStateToProps = createStructuredSelector({
  post: selectCurrentPost,
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  getPost: postId => dispatch(getPostStart(postId)),
  uncommentPost: ids => dispatch(uncommentPost(ids))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
