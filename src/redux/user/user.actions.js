import userActionTypes from "./user.types";

export const signUpStepStart = payload => {
  const action = { payload };

  switch (payload.step) {
    case 1:
      return { type: userActionTypes.SIGN_UP_STEP_ONE_START, ...action };
    case 2:
      return { type: userActionTypes.SIGN_UP_STEP_TWO_START, ...action };
    case 4:
      return { type: userActionTypes.SIGN_UP_STEP_FOUR_START, ...action };
    default:
      return { type: userActionTypes.SIGN_UP_STEP_ONE_START, ...action };
  }
};

export const signUpStepSuccess = (step, payload) => {
  switch (step) {
    case 1:
      return { type: userActionTypes.SIGN_UP_STEP_ONE_SUCCESS };
    case 2:
      return { type: userActionTypes.SIGN_UP_STEP_TWO_SUCCESS };
    case 4:
      return { type: userActionTypes.SIGN_UP_STEP_FOUR_SUCCESS, payload };
    default:
      return { type: userActionTypes.SIGN_UP_STEP_ONE_SUCCESS };
  }
};

export const signUpStepFailure = (error, step) => {
  const action = { payload: error };

  switch (step) {
    case 1:
      return { type: userActionTypes.SIGN_UP_STEP_ONE_FAILURE, ...action };
    case 2:
      return { type: userActionTypes.SIGN_UP_STEP_TWO_FAILURE, ...action };
    case 3:
      return { type: userActionTypes.SIGN_UP_STEP_THREE_FAILURE, ...action };
    case 4:
      return { type: userActionTypes.SIGN_UP_STEP_FOUR_FAILURE, ...action };
    default:
      return { type: userActionTypes.SIGN_UP_STEP_ONE_FAILURE, ...action };
  }
};

export const getUserStart = userId => ({
  type: userActionTypes.GET_USER_START,
  payload: userId
});

export const getUserSuccess = user => ({
  type: userActionTypes.GET_USER_SUCCESS,
  payload: user
});

export const getUserFailure = error => ({
  type: userActionTypes.GET_USER_FAILURE,
  payload: error
});

export const editUserStart = details => ({
  type: userActionTypes.EDIT_USER_START,
  payload: details
});

export const editUserSuccess = user => ({
  type: userActionTypes.EDIT_USER_SUCCESS,
  payload: user
});

export const editUserFailure = error => ({
  type: userActionTypes.EDIT_USER_FAILURE,
  payload: error
});

export const getUsers = () => ({
  type: userActionTypes.GET_USERS
});

export const getUsersSuccess = users => ({
  type: userActionTypes.GET_USERS_SUCCESS,
  payload: users
});

export const followUser = details => ({
  type: userActionTypes.FOLLOW_USER,
  payload: details
});

export const followUserSuccess = user => ({
  type: userActionTypes.FOLLOW_USER_SUCCESS,
  payload: user
});

export const unfollowUser = details => ({
  type: userActionTypes.UNFOLLOW_USER,
  payload: details
});

export const unfollowUserSuccess = user => ({
  type: userActionTypes.UNFOLLOW_USER_SUCCESS,
  payload: user
});

export const clearSelectedUser = () => ({
  type: userActionTypes.CLEAR_SELECTED_USER
});

export const updateImages = details => ({
  type: userActionTypes.UPDATE_IMAGES,
  payload: details
});

export const updateImagesSuccess = user => ({
  type: userActionTypes.UPDATE_IMAGES_SUCCESS,
  payload: user
});

export const updateImagesFailure = error => ({
  type: userActionTypes.UPDATE_IMAGES_FAILURE,
  payload: error
});
