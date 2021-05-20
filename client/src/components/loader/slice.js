import { createSlice, createSelector } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: { show: false },
  reducers: {
    showLoader: (state) => ({ show: true }),
    hideLoader: (state) => ({ show: false }),
  },
});

const { actions, reducer } = loaderSlice;

export const loaderSelector = createSelector((state) => state.loader);

export const { showLoader, hideLoader } = actions;

export default reducer;
