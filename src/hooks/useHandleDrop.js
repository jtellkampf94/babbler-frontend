import { useCallback, useState, useEffect } from "react";

const useHandleDrop = () => {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (imgSrc) {
      setError(false);
    }
  }, [imgSrc]);

  const handleDrop = useCallback(acceptedFile => {
    if (acceptedFile.length === 0) {
      setError(true);
      return;
    }

    const img = acceptedFile[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setImgSrc(reader.result);
      },
      false
    );
    reader.readAsDataURL(img);
  }, []);

  return { handleDrop, error, imgSrc, setImgSrc };
};

export default useHandleDrop;
