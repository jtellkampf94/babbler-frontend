import React from "react";
import {
  ContentContainer,
  ContentText,
  ImageContainer,
  Image
} from "./PostContent.styles";

const PostContent = ({ post, imageUrl, children }) => {
  return (
    <ContentContainer>
      <ContentText>{post}</ContentText>
      {imageUrl && (
        <ImageContainer>
          <Image src={imageUrl}></Image>
        </ImageContainer>
      )}
      {children}
    </ContentContainer>
  );
};

export default PostContent;
