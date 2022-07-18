import { useState } from "react";

const useModal = () => {
  const [showModal, setModalState] = useState(false);

  const toggleModal = () => setModalState(!showModal);

  return [showModal, toggleModal];
};

export default useModal;
