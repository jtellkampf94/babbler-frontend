import { createSelector } from "reselect";

const selectPost = state => state.post;

export const selectPostError = createSelector([selectPost], post => post.error);

export const selectPosts = createSelector([selectPost], post => post.posts);

export const selectCurrentPost = createSelector(
  [selectPost],
  post => post.post
);
