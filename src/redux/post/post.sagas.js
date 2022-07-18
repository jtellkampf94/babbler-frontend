import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import jwtDecode from "jwt-decode";

import history from "../../utils/history";
import setAuthToken from "../../utils/setAuthToken";

import postActionTypes from "./post.types";

import {
  createPostSuccess,
  createPostFailure,
  getPostsFeedSuccess,
  getPostsFeedFailure,
  getPostsSuccess,
  getPostsFailure,
  getPostSuccess,
  getPostFailure,
  likePostError,
  unlikePostError,
  commentPostFailure,
  uncommentPostSuccess,
  uncommentPostFailure,
  deletePostFailure
} from "./post.actions";

//--------------WORKER-GENERATORS--------------//

export function* createPost(text, imageUrl, closeModal) {
  const post = { text };
  if (imageUrl) {
    post.imageUrl = imageUrl;
  }
  try {
    const { data } = yield axios.post("/api/posts/new", post);
    closeModal();
    yield createPostSuccess(data);
    yield getPostsFeed();
    history.push("/");
  } catch (error) {
    yield put(createPostFailure(error.response.data));
  }
}

export function* uploadPostImageToS3({ payload: { text, image, closeModal } }) {
  try {
    if (image) {
      // get presignedUrl
      const {
        data: { key, presignedUrl }
      } = yield axios.get("/api/upload");
      //upload image to s3
      setAuthToken();
      yield axios.put(presignedUrl, image, {
        headers: {
          "Content-Type": image.type
        }
      });
      // provide create post function imageUrl
      const imageUrl = `https://babbler-social-media-bucket.s3-eu-west-2.amazonaws.com/${key}`;
      const token = localStorage.getItem("babblerToken");
      setAuthToken(token);

      yield createPost(text, imageUrl, closeModal);
    } else {
      yield createPost(text, null, closeModal);
    }
  } catch (error) {
    yield put(createPostFailure(error.response.data));
  }
}

export function* getPostsFeed() {
  const token = localStorage.getItem("babblerToken");
  const decodedUser = jwtDecode(token);
  try {
    const { data: posts } = yield axios.get(
      `/api/posts/feed/${decodedUser._id}`
    );
    yield put(getPostsFeedSuccess(posts));
  } catch (error) {
    yield put(getPostsFeedFailure(error.response.data));
  }
}

export function* getPosts({ payload: userId }) {
  try {
    const { data: posts } = yield axios.get(`/api/posts/${userId}`);
    yield put(getPostsSuccess(posts));
  } catch (error) {
    yield put(getPostsFailure(error.response.data));
  }
}

export function* getPost({ payload: postId }) {
  try {
    const { data: post } = yield axios.get(`/api/posts/post/${postId}`);
    yield put(getPostSuccess(post));
  } catch (error) {
    yield put(getPostFailure(error.response.data));
  }
}

export function* likePost({ payload: { postId, state, setState } }) {
  try {
    const { data: post } = yield axios.put("/api/posts/like", { postId });
    const { likes } = post;
    setState({ ...state, likes });
  } catch (error) {
    yield put(likePostError(error.response.data));
  }
}

export function* unlikePost({ payload: { postId, state, setState } }) {
  try {
    const { data: post } = yield axios.put("/api/posts/unlike", { postId });
    const { likes } = post;
    setState({ ...state, likes });
  } catch (error) {
    yield put(unlikePostError(error.response.data));
  }
}

export function* commentPost({
  payload: { comment, postId, state, setState }
}) {
  try {
    const { data: post } = yield axios.put("/api/posts/comment", {
      postId,
      comment
    });
    const { comments } = post;
    setState({ ...state, comments });
  } catch (error) {
    yield put(commentPostFailure(error.response.data));
  }
}

export function* uncommentPost({ payload: { commentId, postId } }) {
  try {
    const { data: post } = yield axios.put("/api/posts/uncomment", {
      commentId,
      postId
    });
    yield put(uncommentPostSuccess(post));
  } catch (error) {
    yield put(uncommentPostFailure(error.response.data));
  }
}

export function* deletePost({ payload: postId }) {
  try {
    const { data: post } = yield axios.delete(`/api/posts/${postId}`);
    console.log(post);
    yield getPostsFeed();
    history.push("/");
  } catch (error) {
    yield put(deletePostFailure(error.response.data));
  }
}

//--------------WATCHER-GENERATORS--------------//

export function* onCreatePostStart() {
  yield takeLatest(postActionTypes.CREATE_POST_START, uploadPostImageToS3);
}

export function* onGetPostsFeedStart() {
  yield takeLatest(postActionTypes.GET_POSTS_FEED_START, getPostsFeed);
}

export function* onGetPostsStart() {
  yield takeLatest(postActionTypes.GET_POSTS_START, getPosts);
}

export function* onGetPostStart() {
  yield takeLatest(postActionTypes.GET_POST_START, getPost);
}

export function* onLikePost() {
  yield takeLatest(postActionTypes.LIKE_POST, likePost);
}

export function* onUnlikePost() {
  yield takeLatest(postActionTypes.UNLIKE_POST, unlikePost);
}

export function* onCommentPost() {
  yield takeLatest(postActionTypes.COMMENT_POST, commentPost);
}

export function* onUncommentPost() {
  yield takeLatest(postActionTypes.UNCOMMENT_POST, uncommentPost);
}

export function* onDeletePost() {
  yield takeLatest(postActionTypes.DELETE_POST, deletePost);
}

export function* postSagas() {
  yield all([
    call(onCreatePostStart),
    call(onGetPostsFeedStart),
    call(onGetPostsStart),
    call(onGetPostStart),
    call(onLikePost),
    call(onUnlikePost),
    call(onCommentPost),
    call(onUncommentPost),
    call(onDeletePost)
  ]);
}
