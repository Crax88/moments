import { createSlice, createSelector } from "@reduxjs/toolkit";
import { toaster } from "evergreen-ui";
import Api from "../utils/Api";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    selected: {},
  },
  reducers: {
    putPosts: (state, { payload }) => ({ ...state, list: payload }),
    putPost: (state, { payload }) => ({ ...state, selected: payload }),
    deletePost: (state, { payload }) => ({
      ...state,
      list: state.posts.filter((post) => post._id !== payload),
    }),
    updatePost: (state, { payload }) => ({
      ...state,
      list: state.posts.map((post) =>
        post._id === payload._id ? { ...post, ...payload } : post
      ),
    }),
  },
});

const { reducer, actions } = postsSlice;
const { putPosts, putPost } = actions;

export const getPosts = () => async (dispatch) => {
  const data = await Api.getPosts();
  if (!data.errors) {
    dispatch(putPosts(data.data));
    data.message && toaster.success(data.message, { duration: 3 });
  } else {
    data.message && toaster.danger(data.message, { duration: 3 });
  }
};

export const getPostById = (id) => async (dispatch) => {
  const data = await Api.getPostById(id);
  if (!data.errors) {
    dispatch(putPost(data.data));
    data.message && toaster.success(data.message, { duration: 3 });
  } else {
    data.message && toaster.danger(data.message, { duration: 3 });
  }
};

export const createPost = (post) => async (dispatch) => {
  const data = await Api.createPost(post);
  if (!data.errors) {
    dispatch(putPost(data.data));
    data.message && toaster.success(data.message, { duration: 3 });
  } else {
    data.message && toaster.danger(data.message, { duration: 3 });
  }
};

export const updatePost = (post) => async (dispatch) => {
  const data = await Api.updatePost(post);
  if (!data.errors) {
    dispatch(updatePost(data.data));
    data.message && toaster.success(data.message, { duration: 3 });
  } else {
    data.message && toaster.danger(data.message, { duration: 3 });
  }
};

export const deletePost = (id) => async (dispatch) => {
  const data = await Api.deletePost(id);
  if (!data.errors) {
    dispatch(deletePost(id));
    data.message && toaster.success(data.message, { duration: 3 });
  } else {
    data.message && toaster.danger(data.message, { duration: 3 });
  }
};

export const likePost = (id) => async (dispatch) => {
  const data = await Api.likePost(id);
  if (!data.errors) {
    dispatch(updatePost(data.data));
    data.message && toaster.success(data.message, { duration: 3 });
  } else {
    data.message && toaster.danger(data.message, { duration: 3 });
  }
};

const baseSelector = (state) => state.posts;

export const postsSelector = createSelector(
  baseSelector,
  (postsState) => postsState.list
);
export const postSelector = createSelector(
  baseSelector,
  (postsState) => postsState.selected
);

export default reducer;
