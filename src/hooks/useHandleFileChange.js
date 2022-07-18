import { useState } from "react";

const useHandleFileChange = () => {
  const [image, setImage] = useState(null);

  const handleClick = e => {
    document.querySelector('input[type="file"]').click();
  };

  const handleFileChange = e => {
    setImage(e.target.files[0]);
  };

  return { image, setImage, handleClick, handleFileChange };
};

export default useHandleFileChange;
