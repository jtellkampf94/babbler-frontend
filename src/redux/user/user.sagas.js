import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import jwtDecode from "jwt-decode";

import history from "../../utils/history";
import setAuthToken from "../../utils/setAuthToken";
import userActionTypes from "./user.types";
import {
  signUpStepSuccess,
  signUpStepFailure,
  getUserSuccess,
  getUserFailure,
  editUserFailure,
  editUserSuccess,
  getUsersSuccess,
  followUserSuccess,
  unfollowUserSuccess,
  updateProfilePictureFailure,
  updateImagesSuccess,
  updateImagesFailure
} from "./user.actions";

//--------------WORKER-GENERATORS--------------//

export function* signUpStepOne({
  payload: { step, name, email, username, nextStep }
}) {
  try {
    yield axios.post("/api/users", {
      step,
      name,
      email,
      username
    });
    yield put(signUpStepSuccess(1));
    yield nextStep();
  } catch (error) {
    yield put(signUpStepFailure(error.response.data, 1));
  }
}

export function* signUpStepTwo({ payload: { step, bio, nextStep } }) {
  try {
    yield axios.post("/api/users", {
      step,
      bio
    });
    yield put(signUpStepSuccess(2));
    yield nextStep();
  } catch (error) {
    yield put(signUpStepFailure(error.response.data, 2));
  }
}

export function* signUpStepFour({ payload }) {
  if (payload.password !== payload.confirmPassword) {
    yield put(
      signUpStepFailure({ confirmPassword: "Passwords must match" }, 4)
    );
  } else {
    const credentials = { ...payload };
    delete credentials.profilePicture;
    delete credentials.confirmPassword;
    try {
      const {
        data: { token }
      } = yield axios.post("/api/users", credentials);
      localStorage.setItem("babblerToken", token);
      setAuthToken(token);
      const decodedUser = jwtDecode(token);
      const { state } = history.location;
      yield put(signUpStepSuccess(4, decodedUser));
      if (payload.profilePicture) {
        yield postProfilePicture(payload.profilePicture, state);
      } else {
        state ? history.push(state.from.pathname) : history.push("/");
      }
    } catch (error) {
      yield put(signUpStepFailure(error.response.data, 2));
    }
  }
}

export function* postProfilePicture(profilePicture, state) {
  try {
    // get s3 presigned url
    const {
      data: { key, presignedUrl }
    } = yield axios.get("/api/upload");
    // send picture to s3 bucket
    setAuthToken();
    yield axios.put(presignedUrl, profilePicture, {
      headers: {
        "Content-Type": profilePicture.type
      }
    });
    // update user profile with profilePictureUrl
    const profilePictureUrl = `https://babbler-social-media-bucket.s3-eu-west-2.amazonaws.com/${key}`;
    const token = localStorage.getItem("babblerToken");
    setAuthToken(token);
    const userId = key.split("/")[0];
    const {
      data: { token: newToken }
    } = yield axios.put(`/api/users/${userId}`, {
      profilePictureUrl
    });
    // signup with new details
    localStorage.setItem("babblerToken", newToken);
    setAuthToken(newToken);
    const decodedUser = jwtDecode(newToken);
    yield put(signUpStepSuccess(4, decodedUser));
    state ? history.push(state.from.pathname) : history.push("/");
  } catch (error) {
    // delete profile if error in posting profile picture to s3
    const token = localStorage.getItem("babblerToken");
    setAuthToken(token);
    const decodedToken = jwtDecode(token);
    yield axios.delete(`/api/users/${decodedToken._id}`);
    // send error message to user
    yield put(
      signUpStepFailure(
        {
          profilePicture:
            "Something went wrong on our end please try again later"
        },
        3
      )
    );
  }
}

export function* getUser({ payload: userId }) {
  try {
    const { data: user } = yield axios.get(`/api/users/${userId}`);
    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(getUserFailure(error.response.data));
  }
}

export function* editUser({ payload: { credentials, userId } }) {
  try {
    if (
      credentials.currentPassword.length > 0 ||
      credentials.newPassword.length > 0 ||
      credentials.confirmPassword.length > 0
    ) {
      if (credentials.newPassword.length === 0) {
        return yield put(
          editUserFailure({ newPassword: "Please enter new password" })
        );
      } else if (credentials.confirmPassword.length === 0) {
        return yield put(
          editUserFailure({ confirmPassword: "Please enter confirm password" })
        );
      } else if (credentials.newPassword !== credentials.confirmPassword) {
        return yield put(
          editUserFailure({ confirmPassword: "Passwords must match" })
        );
      }
      credentials.password = credentials.newPassword;
    }
    delete credentials.newPassword;
    delete credentials.confirmPassword;
    console.log(credentials);
    const {
      data: { token }
    } = yield axios.put(`/api/users/${userId}`, credentials);
    localStorage.setItem("babblerToken", token);
    setAuthToken(token);
    const decodedUser = jwtDecode(token);
    yield put(editUserSuccess(decodedUser));
    history.push("/");
  } catch (error) {
    yield put(editUserFailure(error.response.data));
  }
}

export function* getUsers() {
  try {
    const { data: users } = yield axios.get("/api/users");
    yield put(getUsersSuccess(users));
  } catch (error) {
    console.log(error);
  }
}

export function* followUser({ payload: { userId, type } }) {
  try {
    const {
      data: { token, following, follower }
    } = yield axios.put("/api/users/follow", { userId });
    localStorage.setItem("babblerToken", token);
    setAuthToken(token);
    const decodedUser = jwtDecode(token);
    yield put(followUserSuccess(decodedUser));

    if (type === "following") {
      yield put(getUserSuccess(following));
    } else if (type === "follower") {
      yield put(getUserSuccess(follower));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* unfollowUser({ payload: { userId, type } }) {
  try {
    const {
      data: { token, unfollower, unfollowing }
    } = yield axios.put("/api/users/unfollow", { userId });
    localStorage.setItem("babblerToken", token);
    setAuthToken(token);
    const decodedUser = jwtDecode(token);
    yield put(unfollowUserSuccess(decodedUser));

    if (type === "unfollowing") {
      yield put(getUserSuccess(unfollowing));
    } else if (type === "unfollower") {
      yield put(getUserSuccess(unfollower));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* updateImages({
  payload: { userId, profilePicture, headerImage, toggleModal }
}) {
  try {
    const {
      data: { key: profilePictureKey, presignedUrl: profilePicturePresignedUrl }
    } = yield axios.get("/api/upload");
    const {
      data: { key: headerImageKey, presignedUrl: headerImagePresignedUrl }
    } = yield axios.get("/api/upload");

    setAuthToken();
    if (profilePicture) {
      yield axios.put(profilePicturePresignedUrl, profilePicture, {
        headers: {
          "Content-Type": profilePicture.type
        }
      });
    }

    if (headerImage) {
      yield axios.put(headerImagePresignedUrl, headerImage, {
        headers: {
          "Content-Type": headerImage.type
        }
      });
    }

    const profilePictureUrl = `https://babbler-social-media-bucket.s3-eu-west-2.amazonaws.com/${profilePictureKey}`;
    const headerImageUrl = `https://babbler-social-media-bucket.s3-eu-west-2.amazonaws.com/${headerImageKey}`;
    const token = localStorage.getItem("babblerToken");
    setAuthToken(token);

    let imageUrls = {};

    if (profilePicture) {
      imageUrls.profilePictureUrl = profilePictureUrl;
    }

    if (headerImage) {
      imageUrls.headerImageUrl = headerImageUrl;
    }

    const {
      data: { token: newToken }
    } = yield axios.put(`/api/users/${userId}`, imageUrls);

    localStorage.setItem("babblerToken", newToken);
    setAuthToken(newToken);
    const decodedUser = jwtDecode(newToken);

    yield put(updateImagesSuccess(decodedUser));
    toggleModal();
  } catch (error) {
    yield put(updateImagesFailure(error.response.data));
  }
}

//--------------WATCHER-GENERATORS--------------//

export function* onSignUpStepOne() {
  yield takeLatest(userActionTypes.SIGN_UP_STEP_ONE_START, signUpStepOne);
}

export function* onSignUpStepTwo() {
  yield takeLatest(userActionTypes.SIGN_UP_STEP_TWO_START, signUpStepTwo);
}

export function* onSignUpStepFour() {
  yield takeLatest(userActionTypes.SIGN_UP_STEP_FOUR_START, signUpStepFour);
}

export function* onGetUser() {
  yield takeLatest(userActionTypes.GET_USER_START, getUser);
}

export function* onEditUserStart() {
  yield takeLatest(userActionTypes.EDIT_USER_START, editUser);
}

export function* onGetUsers() {
  yield takeLatest(userActionTypes.GET_USERS, getUsers);
}

export function* onFollowUser() {
  yield takeLatest(userActionTypes.FOLLOW_USER, followUser);
}

export function* onUnfollowUser() {
  yield takeLatest(userActionTypes.UNFOLLOW_USER, unfollowUser);
}

export function* onUpdateImages() {
  yield takeLatest(userActionTypes.UPDATE_IMAGES, updateImages);
}

export function* userSagas() {
  yield all([
    call(onSignUpStepOne),
    call(onSignUpStepTwo),
    call(onSignUpStepFour),
    call(onGetUser),
    call(onEditUserStart),
    call(onGetUsers),
    call(onFollowUser),
    call(onUnfollowUser),
    call(onUpdateImages)
  ]);
}
