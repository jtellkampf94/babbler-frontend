import React, { useState, useEffect } from "react";

import {
  Container,
  Header,
  Text,
  HeaderPlaceholder,
  Wrapper,
  PlaceholderImage,
  FileInput,
  ButtonContainer
} from "./EditHeader.styles";
import Button from "../../../shared/Button/Button";
import ErrorMessage from "../../../shared/ErrorMessage/ErrorMessage";
import CustomImageEditor from "../../../shared/CustomImageEditor/CustomImageEditor";
import useHandleFileChange from "../../../../hooks/useHandleFileChange";
import ImagePlaceholderPNG from "../../../../assets/images/header-image-placeholder.png";

const EditHeader = ({ state, setState, user, error }) => {
  const {
    image,
    setImage,
    handleClick,
    handleFileChange
  } = useHandleFileChange();

  const [editorDimensions, setEditorDimensions] = useState({
    editorWidth: null,
    editorHeight: null
  });

  useEffect(() => {
    getEditorDimensions();
  }, [window.innerWidth, image]);

  const getEditorDimensions = () => {
    const width =
      document.querySelector(".header-editor-container").offsetWidth * 0.95 -
      50;
    const height = width * 0.3344;

    setEditorDimensions({ editorWidth: width, editorHeight: height });
  };

  const { editorWidth, editorHeight } = editorDimensions;

  const { profilePicture, headerImage } = state;

  return (
    <Container className="header-editor-container">
      <Header>Edit Header</Header>
      {!image && (
        <Text>
          Click on header image to select a header image from your photos.
        </Text>
      )}
      {!image && (
        <HeaderPlaceholder onClick={handleClick}>
          <Wrapper
            headerImage={user.headerImageUrl ? user.headerImageUrl : null}
          >
            {!user.headerImageUrl && (
              <PlaceholderImage imagePlaceholder={ImagePlaceholderPNG} />
            )}
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </Wrapper>
        </HeaderPlaceholder>
      )}
      {image && editorHeight && editorWidth && (
        <CustomImageEditor
          state={state}
          setState={setState}
          setImgSrc={setImage}
          imgSrc={URL.createObjectURL(image)}
          stateKey="headerImage"
          width={editorWidth}
          height={editorHeight}
        />
      )}
      {error.headerImageUrl && (
        <ErrorMessage>{error.headerImageUrl}</ErrorMessage>
      )}
      {image && !headerImage ? null : (
        <ButtonContainer>
          <Button type="submit" inverted>
            Save
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default EditHeader;
