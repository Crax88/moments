import { createSlice } from "@reduxjs/toolkit";
import { toaster } from "evergreen-ui";
import Api from "../utils/Api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: null,
    loginData: null,
  },
  reducers: {
    authSuccess: (_, { payload }) => ({ isAuth: true, loginData: payload }),
    authFail: () => ({ isAuth: false, loginData: null }),
  },
});

const { reducer, actions } = authSlice;
const { authSuccess, authFail } = actions;

export const authUser = () => async (dispatch) => {
  const { data, errors, message } = await Api.authUser();
  if (!errors) {
    dispatch(authSuccess(data.data));
    message && toaster.success(message, { duration: 3 });
  } else {
    dispatch(authFail());
    message && toaster.danger(message, { duration: 3 });
  }
};

export const registerUser = (user) => async (dispatch) => {
  const { data, errors, message } = await Api.registerUser(user);
  if (!errors) {
    dispatch(authSuccess(data.data));
    message && toaster.success(message, { duration: 3 });
  } else {
    dispatch(authFail());
    message && toaster.danger(message, { duration: 3 });
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  const { data, errors, message } = await Api.registerUser(credentials);
  if (!errors) {
    dispatch(authSuccess(data.data));
    message && toaster.success(message, { duration: 3 });
  } else {
    dispatch(authFail());
    message && toaster.danger(message, { duration: 3 });
  }
};

export const authSelector = (state) => state.auth;

export default reducer;
