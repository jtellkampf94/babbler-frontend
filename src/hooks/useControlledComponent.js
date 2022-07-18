import { useState } from "react";

const useControlledComponent = initialState => {
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return [state, handleChange, setState];
};

export default useControlledComponent;
