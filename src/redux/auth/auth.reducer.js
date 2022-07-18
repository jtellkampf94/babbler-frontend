import authActionTypes from "./auth.types";

const INITIAL_STATE = {
  error: {}
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN_SUCCESS:
    case authActionTypes.SIGN_OUT_SUCCESS:
      return { error: {} };
    case authActionTypes.SIGN_IN_FAILURE:
    case authActionTypes.SIGN_OUT_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
