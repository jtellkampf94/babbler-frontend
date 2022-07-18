import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  InteractionsContainer,
  Container,
  IconContainer,
  IconText,
  Icon,
  Text
} from "./Interactions.styles";
import CommentForm from "../CommentForm/CommentForm";
import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import {
  likePost,
  unlikePost,
  commentPost
} from "../../../../redux/post/post.actions";
import history from "../../../../utils/history";

const Interactions = props => {
  const [showComments, toggleComments] = useState(false);
  const [values, setValues] = useState({
    likes: props.likes,
    comments: props.comments
  });

  const { likes, comments } = values;
  const like = likes.includes(props.user._id);

  const handleClick = e => {
    e.stopPropagation();
    toggleComments(!showComments);
  };

  const handleLike = e => {
    e.stopPropagation();
    const dispatchAction = like ? "unlikePost" : "likePost";
    props[dispatchAction]({
      postId: props.postId,
      state: values,
      setState: setValues
    });
  };

  const redirectToLogin = e => {
    e.stopPropagation();
    history.push("/login");
  };

  return (
    <InteractionsContainer>
      <Container>
        <IconContainer
          className={`${comments.includes(props.user._id) ? "selected" : null}`}
          onClick={props.user._id ? handleClick : redirectToLogin}
        >
          <Icon className="far fa-comments" />
          <IconText>{comments.length}</IconText>
        </IconContainer>
        <IconContainer
          className={`${like || false ? "selected" : null}`}
          onClick={props.user._id ? handleLike : redirectToLogin}
        >
          <Icon className={`${like || false ? "fas" : "far"} fa-heart`} />
          <IconText>{likes.length}</IconText>
        </IconContainer>
      </Container>
      {showComments && comments.length > 0 && (
        <Text
          onClick={e => {
            e.stopPropagation();
            history.push(`/post/${props.postId}`);
          }}
        >
          {comments.length === 1 ? (
            <React.Fragment>View comment</React.Fragment>
          ) : (
            <React.Fragment>View all {comments.length} comments</React.Fragment>
          )}
        </Text>
      )}
      {showComments && (
        <CommentForm
          avatarUrl={props.avatarUrl}
          commentPost={props.commentPost}
          postId={props.postId}
          values={values}
          setValues={setValues}
        />
      )}
    </InteractionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  likePost: postInfo => dispatch(likePost(postInfo)),
  unlikePost: postInfo => dispatch(unlikePost(postInfo)),
  commentPost: details => dispatch(commentPost(details))
});

export default connect(mapStateToProps, mapDispatchToProps)(Interactions);
