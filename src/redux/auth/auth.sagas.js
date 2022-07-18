import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import jwtDecode from "jwt-decode";

import history from "../../utils/history";
import setAuthToken from "../../utils/setAuthToken";

import authActionTypes from "./auth.types";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from "./auth.actions";

//--------------WORKER-GENERATORS--------------//

export function* isUserAuthenticated() {
  try {
    if (localStorage.babblerToken) {
      const decodedUser = jwtDecode(localStorage.babblerToken);
      const currentTime = Date.now();
      if (decodedUser.expiresAt < currentTime) {
        yield signOut();
      } else {
        setAuthToken(localStorage.babblerToken);
        yield put(signInSuccess(decodedUser));
      }
    } else {
      return;
    }
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signIn({ payload: { email, password } }) {
  try {
    const {
      data: { token }
    } = yield axios.post("/api/auth/signin", { email, password });
    localStorage.setItem("babblerToken", token);

    const { state } = history.location;

    setAuthToken(token);
    const decodedUser = jwtDecode(token);
    // put user details in user reducer;
    yield put(signInSuccess(decodedUser));
    state ? history.push(state.from.pathname) : history.push("/");
  } catch (error) {
    yield put(signInFailure(error.response.data));
  }
}

export function* signOut() {
  try {
    localStorage.removeItem("babblerToken");
    setAuthToken();
    yield put(signOutSuccess());
    history.push("/");
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

//--------------WATCHER-GENERATORS--------------//

export function* onSignInStart() {
  yield takeLatest(authActionTypes.SIGN_IN_START, signIn);
}

export function* onCheckUserAuthenticated() {
  yield takeLatest(
    authActionTypes.CHECK_USER_AUTHENTICATED,
    isUserAuthenticated
  );
}

export function* onSignOutStart() {
  yield takeLatest(authActionTypes.SIGN_OUT_START, signOut);
}

export function* authSagas() {
  yield all([
    call(onSignInStart),
    call(onCheckUserAuthenticated),
    call(onSignOutStart)
  ]);
}
