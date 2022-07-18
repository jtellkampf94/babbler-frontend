import { all, call } from "redux-saga/effects";

import { authSagas } from "./auth/auth.sagas";
import { userSagas } from "./user/user.sagas";
import { postSagas } from "./post/post.sagas";

export default function* rootSaga() {
  yield all([call(authSagas), call(userSagas), call(postSagas)]);
}
