import React, { useState } from "react";
import Spinner from "../components/shared/Spinner/Spinner";

const useSpinner = (width, height, color) => {
  const spinner = <Spinner width={width} height={height} color={color} />;

  return spinner;
};

export default useSpinner;
