import { combineReducers } from "@reduxjs/toolkit";
import loader from "./components/loader/slice";

const rootReducer = combineReducers({
  loader,
});

export default rootReducer;
