import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useDropzone } from "react-dropzone";

import { selectUserError } from "../../../../../redux/user/user.selectors";
import {
  Container,
  Heading,
  Subheading,
  DropzoneBox,
  Text,
  Icon
} from "./ProfilePicture.styles";
import ErrorMessage from "../../../../shared/ErrorMessage/ErrorMessage";
import CustomImageEditor from "../../../../shared/CustomImageEditor/CustomImageEditor";
import useHandleDrop from "../../../../../hooks/useHandleDrop";

const ProfilePicture = ({ state, setState, serverError }) => {
  const { handleDrop, error, imgSrc, setImgSrc } = useHandleDrop();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    multiple: false,
    accept: "image/*"
  });

  return (
    <Container>
      {imgSrc === null ? (
        <React.Fragment>
          <Heading>Pick A Profile Picture</Heading>
          <Subheading>Have a favourite selfie? Upload it now.</Subheading>
          <DropzoneBox {...getRootProps()}>
            <input {...getInputProps()} />
            <Icon className="far fa-user" />
            {isDragActive ? (
              <Text>Drop the image here ...</Text>
            ) : (
              <Text>Drag 'n' drop an image here or click to select image</Text>
            )}
          </DropzoneBox>
        </React.Fragment>
      ) : (
        <CustomImageEditor
          imgSrc={imgSrc}
          setImgSrc={setImgSrc}
          stateKey="profilePicture"
          state={state}
          setState={setState}
          width={200}
          height={200}
        />
      )}
      {error && (
        <ErrorMessage>The file selected must be an image File</ErrorMessage>
      )}
      {serverError.profilePicture && (
        <ErrorMessage>{serverError.profilePicture}</ErrorMessage>
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  serverError: selectUserError
});

export default connect(mapStateToProps)(ProfilePicture);
