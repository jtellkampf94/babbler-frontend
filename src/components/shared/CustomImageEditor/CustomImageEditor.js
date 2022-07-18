import React from "react";
import AvatarEditor from "react-avatar-editor";

import {
  Container,
  Zoomer,
  ButtonContainer,
  Icon,
  ZoomerContainer
} from "./CustomImageEditor.styles";
import Button from "../Button/Button";
import useHandleAvatarEditor from "../../../hooks/useHandleAvatarEditor";
import {
  extractImageFileExtensionFromBase64,
  base64StringtoFile
} from "../../../utils/imageUtils";

const CustomImageEditor = ({
  state,
  setState,
  stateKey,
  imgSrc,
  setImgSrc,
  width,
  height
}) => {
  let editorRef = null;
  const setEditorRef = editor => (editorRef = editor);

  const handleCancel = () => {
    setImgSrc(null);
    setState({ ...state, [stateKey]: null });
    if (document.querySelector('input[type="file"]') !== null)
      document.querySelector('input[type="file"]').value = null;
  };

  const {
    handleScaleChange,
    getCroppedUrl,
    scaleValue
  } = useHandleAvatarEditor(editorRef);

  const handleCrop = () => {
    const url = getCroppedUrl(editorRef);
    const fileExtension = extractImageFileExtensionFromBase64(url);
    const filename = "image." + fileExtension;
    const croppedImageToFile = base64StringtoFile(url, filename);

    setState({ ...state, [stateKey]: croppedImageToFile });
  };

  return (
    <Container>
      <AvatarEditor
        width={width}
        height={height}
        scale={scaleValue}
        image={imgSrc}
        ref={setEditorRef}
        border={25}
      />
      <ZoomerContainer>
        <Icon className="fas fa-minus" />
        <Zoomer
          type="range"
          value={scaleValue}
          min="1"
          max="10"
          onChange={handleScaleChange}
        />
        <Icon className="fas fa-plus" />
      </ZoomerContainer>
      <ButtonContainer>
        <Button type="button" onClick={handleCancel}>
          Cancel
        </Button>
        {!state[stateKey] && (
          <Button type="button" onClick={handleCrop}>
            Apply
          </Button>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default CustomImageEditor;
