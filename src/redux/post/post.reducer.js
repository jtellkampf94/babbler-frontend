import postActionTypes from "./post.types";
import authActionTypes from "../auth/auth.types";

const INITIAL_STATE = {
  error: {},
  posts: [],
  post: {}
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.GET_POSTS_FEED_SUCCESS:
    case postActionTypes.GET_POSTS_SUCCESS:
      return { post: {}, error: {}, posts: action.payload };
    case postActionTypes.GET_POST_SUCCESS:
    case postActionTypes.UNCOMMENT_POST_SUCCESS:
      return { posts: {}, error: {}, post: action.payload };
    case postActionTypes.GET_POSTS_FEED_FAILURE:
    case postActionTypes.GET_POSTS_FAILURE:
    case postActionTypes.GET_POST_FAILURE:
    case postActionTypes.CREATE_POST_FAILURE:
    case postActionTypes.LIKE_POST_ERROR:
    case postActionTypes.UNLIKE_POST_ERROR:
    case postActionTypes.UNCOMMENT_POST_FAILURE:
      return { ...state, error: action.payload };
    case postActionTypes.DELETE_POST_FAILURE:
      return { ...state, error: action.payload };
    case authActionTypes.SIGN_OUT_SUCCESS:
      return { post: {}, error: {}, posts: [] };
    case postActionTypes.CLEAR_POSTS:
      return { ...state, posts: [] };
    default:
      return state;
  }
};

export default postReducer;
