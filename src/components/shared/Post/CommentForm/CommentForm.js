import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  FormContainer,
  Form,
  AvatarContainer,
  Input,
  Button
} from "./CommentForm.styles";
import ProfileAvatar from "../../ProfileAvatar/ProfileAvatar";
import theme from "../../../../config/theme";
import useControlledComponent from "../../../../hooks/useControlledComponent";

const CommentForm = ({ avatarUrl, commentPost, postId, values, setValues }) => {
  const [state, handleChange, setState] = useControlledComponent({
    comment: ""
  });
  const { comment } = state;

  const isSmallScreen = useMediaQuery({ query: `(max-width: ${theme.small})` });

  const handleSubmit = e => {
    e.preventDefault();
    commentPost({ comment, postId, state: values, setState: setValues });
    setState({ comment: "" });
  };

  return (
    <FormContainer onClick={e => e.stopPropagation()}>
      {!isSmallScreen && (
        <AvatarContainer>
          <ProfileAvatar avatarUrl={avatarUrl} fontSize={"32px"} />
        </AvatarContainer>
      )}
      <Form onSubmit={handleSubmit}>
        <Input
          name="comment"
          value={comment}
          onChange={handleChange}
          placeholder="Write a comment here..."
          autoComplete="off"
        />
        <Button type="submit" opacity={comment.length > 0 ? 1 : 0.4}>
          Post
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CommentForm;
