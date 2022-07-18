import React from "react";
import styled from "styled-components";

import Button from "../../../shared/Button/Button";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px 5px;
  padding: 15px 0px;
`;

const PostDetails = ({ deletable, uncommentPost, commentId, postId }) => {
  const handleClick = () => {
    uncommentPost({ commentId, postId });
  };

  return (
    <React.Fragment>
      {deletable && (
        <Container>
          <Button onClick={handleClick}>Delete</Button>
        </Container>
      )}
    </React.Fragment>
  );
};

export default PostDetails;
