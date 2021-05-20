import { combineReducers } from "@reduxjs/toolkit";
import { loaderReducer } from "./components/loader";
import auth from "./slices/auth.slice";

const rootReducer = combineReducers({
  loader: loaderReducer,
  auth,
});

export default rootReducer;
