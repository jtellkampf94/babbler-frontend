import React from "react";

import {
  Container,
  Header,
  Text,
  ProfilePlaceholderContainer,
  PlaceholderImage,
  FileInput
} from "./EditProfilePicture.styles";
import ErrorMessage from "../../../shared/ErrorMessage/ErrorMessage";
import CustomImageEditor from "../../../shared/CustomImageEditor/CustomImageEditor";
import useHandleFileChange from "../../../../hooks/useHandleFileChange";
import ProfileAvatarPNG from "../../../../assets/images/profile-avatar.png";

const EditHeader = ({ state, setState, user, error }) => {
  const {
    image,
    setImage,
    handleClick,
    handleFileChange
  } = useHandleFileChange();

  const { profilePicture, headerImage } = state;

  return (
    <Container className="header-editor-container">
      <Header>Edit Profile Picture</Header>
      {!image && (
        <Text>
          Click on the profile image to select a profile picture from your
          photos.
        </Text>
      )}
      {!image && (
        <ProfilePlaceholderContainer>
          <PlaceholderImage
            imagePlaceholder={
              user.profilePictureUrl ? user.profilePictureUrl : ProfileAvatarPNG
            }
            onClick={handleClick}
          />
          <FileInput type="file" accept="image/*" onChange={handleFileChange} />
        </ProfilePlaceholderContainer>
      )}
      {image && (
        <CustomImageEditor
          state={state}
          setState={setState}
          setImgSrc={setImage}
          imgSrc={URL.createObjectURL(image)}
          stateKey="profilePicture"
          width={200}
          height={200}
        />
      )}
      {error.profilePictureUrl && (
        <ErrorMessage>{error.profilePictureUrl}</ErrorMessage>
      )}
    </Container>
  );
};

export default EditHeader;
