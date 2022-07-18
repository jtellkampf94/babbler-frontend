import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

const Container = styled.div`
  display: flex;
  margin: 10px 0px 5px;
  padding: 15px 0px;
  border-top: 1px solid ${({ theme }) => theme.lineBlue};
  border-bottom: 1px solid ${({ theme }) => theme.lineBlue};
  font-size: 16px;
`;

const TextContainer = styled.div`
  margin-right: 15px;
`;

const NumberText = styled.span`
  font-weight: 700;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.darkGrey};
  margin-left: 3px;
  font-weight: 300;
`;

const PostDetails = ({ likes, comments, date }) => {
  return (
    <Container>
      <TextContainer>
        <NumberText>{likes}</NumberText>
        <Text>{likes === 1 ? "Like" : "Likes"}</Text>
      </TextContainer>
      <TextContainer>
        <NumberText>{comments}</NumberText>
        <Text>Comments</Text>
      </TextContainer>
      <TextContainer>
        <Text>
          <Moment format="Do MMM YYYY HH:mm:ss">{date}</Moment>
        </Text>
      </TextContainer>
    </Container>
  );
};

export default PostDetails;
