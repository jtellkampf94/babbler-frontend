import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectUsers = createSelector([selectUser], user => user.users);

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectSelectedUser = createSelector(
  [selectUser],
  user => user.selectedUser
);

export const selectUserError = createSelector([selectUser], user => user.error);
