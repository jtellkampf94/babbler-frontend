import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  Container,
  Form,
  AvatarContainer,
  FormGroup,
  FileInput,
  FormFooter,
  Textarea,
  ImageContainer,
  ImageIcon,
  CroppedImage,
  CharacterCount
} from "./PostForm.styles";
import { createPostStart } from "../../../../redux/post/post.actions";
import { selectPostError } from "../../../../redux/post/post.selectors";
import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { imageDimensions } from "../../../../utils/imageUtils";
import ProfileAvatar from "../../../shared/ProfileAvatar/ProfileAvatar";
import Button from "../../../shared/Button/Button";
import CustomImageEditor from "../../../shared/CustomImageEditor/CustomImageEditor";
import ErrorMessage from "../../../shared/ErrorMessage/ErrorMessage";
import useHandleFileChange from "../../../../hooks/useHandleFileChange";

const PostForm = ({ user, error, createPost, toggleModal }) => {
  const [imgError, setImgError] = useState(null);

  const [editorDimensions, setEditorDimensions] = useState({
    editorWidth: null,
    editorHeight: null
  });

  const [post, setPost] = useState({
    value: "",
    rows: 5,
    minRows: 5,
    maxRows: 10,
    characters: 0,
    croppedImage: null
  });

  const { minRows, maxRows, value, characters, rows, croppedImage } = post;

  const { editorHeight, editorWidth } = editorDimensions;

  const {
    image,
    setImage,
    handleClick,
    handleFileChange
  } = useHandleFileChange();

  useEffect(() => {
    getEditorDimensions();
  }, [window.innerWidth, image]);

  const handleChange = e => {
    const textareaLineHeight = 22;

    const previousRows = e.target.rows;
    e.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    setPost({
      ...post,
      value: e.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
      characters: e.target.value.length
    });
  };

  const handleCropImageChange = () => {
    setPost({ ...post, croppedImage: null });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createPost({ text: value, image: croppedImage, closeModal: toggleModal });
  };

  const getEditorDimensions = () => {
    let currentModalWidth;
    if (document.querySelector(".postContainer") !== null)
      currentModalWidth =
        document.querySelector(".postContainer").offsetWidth * 0.95 - 50;

    if (image) {
      const getInfo = async () => {
        try {
          const { width, height } = await imageDimensions(image);
          const editorHeight = (height / width) * currentModalWidth;
          setEditorDimensions({ editorHeight, editorWidth: currentModalWidth });
        } catch (error) {
          setImgError(error);
        }
      };
      getInfo();
    }
  };

  return (
    <Container className="postContainer">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <AvatarContainer>
            <ProfileAvatar
              avatarUrl={user.profilePictureUrl ? user.profilePictureUrl : null}
            />
          </AvatarContainer>
          <Textarea
            rows={rows}
            onChange={handleChange}
            value={value}
            name="post"
            placeholder="Whats on your mind?"
          />
        </FormGroup>
        {croppedImage ? (
          <ImageContainer>
            <CroppedImage src={URL.createObjectURL(croppedImage)} />
            <Button onClick={handleCropImageChange}>Cancel</Button>
          </ImageContainer>
        ) : (
          image &&
          editorHeight &&
          editorWidth && (
            <CustomImageEditor
              state={post}
              setState={setPost}
              setImgSrc={setImage}
              imgSrc={URL.createObjectURL(image)}
              stateKey="croppedImage"
              width={editorWidth}
              height={editorHeight}
            />
          )
        )}
        {imgError && <ErrorMessage>{imgError}</ErrorMessage>}
        {error.text && <ErrorMessage>{error.text}</ErrorMessage>}
        <FormFooter>
          <ImageIcon className="far fa-image" onClick={handleClick}>
            <FileInput
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </ImageIcon>
          <CharacterCount className={characters > 280 ? "alert" : ""}>
            {characters}/280
          </CharacterCount>
          {image && !croppedImage ? null : (
            <Button inverted type="submit">
              Post
            </Button>
          )}
        </FormFooter>
      </Form>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  error: selectPostError
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPostStart(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
