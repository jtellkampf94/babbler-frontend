import userActionTypes from "./user.types";
import authActionTypes from "../auth/auth.types";

const INITIAL_STATE = {
  users: [],
  currentUser: {},
  selectedUser: {},
  error: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_STEP_ONE_SUCCESS:
    case userActionTypes.SIGN_UP_STEP_TWO_SUCCESS:
    case authActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
        error: {}
      };
    case userActionTypes.SIGN_UP_STEP_FOUR_SUCCESS:
    case authActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.EDIT_USER_SUCCESS:
    case userActionTypes.FOLLOW_USER_SUCCESS:
    case userActionTypes.UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: {}
      };
    case userActionTypes.SIGN_UP_STEP_ONE_FAILURE:
    case userActionTypes.SIGN_UP_STEP_TWO_FAILURE:
    case userActionTypes.SIGN_UP_STEP_THREE_FAILURE:
    case userActionTypes.SIGN_UP_STEP_FOUR_FAILURE:
      return {
        ...state,
        currentUser: {},
        error: action.payload
      };
    case userActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        selectedUser: action.payload,
        error: {}
      };
    case userActionTypes.GET_USER_FAILURE:
      return {
        ...state,
        selectedUser: {},
        error: action.payload
      };
    case userActionTypes.CLEAR_SELECTED_USER:
      return { ...state, selectedUser: {} };
    case userActionTypes.EDIT_USER_FAILURE:
      return { ...state, error: action.payload };
    case userActionTypes.GET_USERS_SUCCESS:
      return { ...state, error: {}, users: action.payload };
    case userActionTypes.UPDATE_IMAGES_SUCCESS:
      return {
        ...state,
        error: {},
        selectedUser: action.payload,
        currentUser: action.payload
      };
    case userActionTypes.UPDATE_IMAGES_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
