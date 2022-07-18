import { combineReducers } from "redux";

import authReducer from "./auth/auth.reducer";
import userReducer from "./user/user.reducer";
import postReducer from "./post/post.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer
});

export default rootReducer;
