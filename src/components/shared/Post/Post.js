import React from "react";

import { PostStyles, Container } from "./Post.styles";
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";
import Interactions from "./Interactions/Interactions";
import history from "../../../utils/history";

const Post = ({
  postId,
  avatarUrl,
  myAvatarUrl,
  name,
  username,
  date,
  post,
  imageUrl,
  comments,
  likes,
  deletable,
  allowHover,
  posterId
}) => {
  return (
    <PostStyles
      className={allowHover && "allowHover"}
      onClick={() => history.push(`/post/${postId}`)}
    >
      <Container>
        <PostHeader
          avatarUrl={avatarUrl}
          name={name}
          username={username}
          date={date}
          deletable={deletable}
          postId={postId}
          posterId={posterId}
        />
        <PostContent post={post} imageUrl={imageUrl}>
          <Interactions
            avatarUrl={myAvatarUrl}
            comments={comments}
            likes={likes}
            postId={postId}
          />
        </PostContent>
      </Container>
    </PostStyles>
  );
};

export default Post;
