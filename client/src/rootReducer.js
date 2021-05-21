import { combineReducers } from "@reduxjs/toolkit";
import { loaderReducer as loader } from "./components/loader";
import auth from "./slices/auth.slice";
import posts from "./slices/posts.slice";

const rootReducer = combineReducers({
  loader,
  auth,
  posts,
});

export default rootReducer;
