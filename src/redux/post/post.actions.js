import postActionTypes from "./post.types";

export const createPostStart = post => ({
  type: postActionTypes.CREATE_POST_START,
  payload: post
});

export const createPostSuccess = () => ({
  type: postActionTypes.CREATE_POST_SUCCESS
});

export const createPostFailure = error => ({
  type: postActionTypes.CREATE_POST_FAILURE,
  payload: error
});

export const getPostsFeedStart = () => ({
  type: postActionTypes.GET_POSTS_FEED_START
});

export const getPostsFeedSuccess = posts => ({
  type: postActionTypes.GET_POSTS_FEED_SUCCESS,
  payload: posts
});

export const getPostsFeedFailure = error => ({
  type: postActionTypes.GET_POSTS_FEED_FAILURE,
  payload: error
});

export const getPostsStart = userId => ({
  type: postActionTypes.GET_POSTS_START,
  payload: userId
});

export const getPostsSuccess = posts => ({
  type: postActionTypes.GET_POSTS_SUCCESS,
  payload: posts
});

export const getPostsFailure = error => ({
  type: postActionTypes.GET_POSTS_FAILURE,
  payload: error
});

export const getPostStart = postId => ({
  type: postActionTypes.GET_POST_START,
  payload: postId
});

export const getPostSuccess = post => ({
  type: postActionTypes.GET_POST_SUCCESS,
  payload: post
});

export const getPostFailure = error => ({
  type: postActionTypes.GET_POST_FAILURE,
  payload: error
});

export const likePost = postInfo => ({
  type: postActionTypes.LIKE_POST,
  payload: postInfo
});

export const likePostError = error => ({
  type: postActionTypes.LIKE_POST_ERROR,
  payload: error
});

export const unlikePost = postInfo => ({
  type: postActionTypes.UNLIKE_POST,
  payload: postInfo
});

export const unlikePostError = error => ({
  type: postActionTypes.UNLIKE_POST_ERROR,
  payload: error
});

export const commentPost = comment => ({
  type: postActionTypes.COMMENT_POST,
  payload: comment
});

export const commentPostFailure = error => ({
  type: postActionTypes.COMMENT_POST_FAILURE,
  payload: error
});

export const uncommentPost = ids => ({
  type: postActionTypes.UNCOMMENT_POST,
  payload: ids
});

export const uncommentPostSuccess = comment => ({
  type: postActionTypes.UNCOMMENT_POST_SUCCESS,
  payload: comment
});

export const uncommentPostFailure = error => ({
  type: postActionTypes.UNCOMMENT_POST_FAILURE,
  payload: error
});

export const deletePost = postId => ({
  type: postActionTypes.DELETE_POST,
  payload: postId
});

export const deletePostFailure = error => ({
  type: postActionTypes.DELETE_POST_FAILURE,
  payload: error
});

export const clearPosts = () => ({
  type: postActionTypes.CLEAR_POSTS
});
