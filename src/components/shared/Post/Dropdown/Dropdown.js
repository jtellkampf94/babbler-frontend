import React, { useState } from "react";
import { connect } from "react-redux";
import ClickOutHandler from "react-onclickout";

import { deletePost } from "../../../../redux/post/post.actions";

import {
  Container,
  IconContainer,
  Icon,
  OptionContainer,
  OptionItem,
  DeleteIcon,
  Text
} from "./Dropdown.styles";

const Dropdown = ({ postId, deletePost }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const handleClick = e => {
    setOpen(false);
    deletePost(postId);
  };

  return (
    <ClickOutHandler onClickOut={() => setOpen(false)}>
      <Container onClick={e => e.stopPropagation()}>
        <IconContainer onClick={toggle}>
          <Icon className="fas fa-angle-down" />
        </IconContainer>
        {open && (
          <OptionContainer>
            <OptionItem onClick={handleClick}>
              <DeleteIcon className="far fa-trash-alt dropdown-icon" />
              <Text>Delete Post</Text>
            </OptionItem>
          </OptionContainer>
        )}
      </Container>
    </ClickOutHandler>
  );
};

const mapDispatchToProps = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId))
});

export default connect(null, mapDispatchToProps)(Dropdown);
