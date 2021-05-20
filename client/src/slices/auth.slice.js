import { createSlice } from "@reduxjs/toolkit";
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
  const data = await Api.authUser();
  if (data.errors) {
    dispatch(authSuccess(data));
  } else {
    dispatch(authFail());
  }
};

export const registerUser = (user) => async (dispatch) => {
  const data = await Api.registerUser(user);
  if (data.errors) {
    dispatch(authSuccess(data));
  } else {
    dispatch(authFail());
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  const data = await Api.loginUser(credentials);
  if (data.errors) {
    dispatch(authSuccess(data));
  } else {
    dispatch(authFail());
  }
};

export const authSelector = (state) => state.auth;

export default reducer;
