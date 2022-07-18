import { useState } from "react";

const useHandleAvatarEditor = editorRef => {
  const [scaleValue, setScaleValue] = useState(1);

  const getCroppedUrl = editorRef => {
    if (editorRef !== null) {
      const url = editorRef.getImageScaledToCanvas().toDataURL();
      return url;
    }
  };

  const handleScaleChange = e => {
    setScaleValue(parseFloat(e.target.value));
  };

  return { getCroppedUrl, handleScaleChange, scaleValue };
};

export default useHandleAvatarEditor;
