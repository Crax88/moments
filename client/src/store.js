import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import { initLoader } from "./components/loader/api";

const store = configureStore({
  reducer,
});

initLoader(store);

export default store;
