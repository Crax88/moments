const data = require("../mocks");

const getPosts = async (req, res) => {
  const posts = data.posts;
  res.json({ data: posts, errors: null, message: "Posts loaded" });
};

const getPostById = async (req, res) => {
  const post = data.posts.find((post) => post.id === req.params.id);
  if (!post) {
    return res
      .status(404)
      .json({ data: null, errors: null, message: "Post not found" });
  }
  res.json({ data: post, errors: null, message: "Post loaded" });
};

const createPost = async (req, res) => {
  const post = {
    ...req.body,
    id: (data.posts.length + 1).toString(),
    createdAt: new Date(),
  };
  data.posts.push(post);
  res.json({ data: post, errors: null, message: "Post created" });
};
const updatePost = async (req, res) => {
  const postIndex = data.posts.findIndex((post) => post.id === req.body.id);
  if (postIndex < 0) {
    return res
      .status(404)
      .json({ data: null, errors: null, message: "Post not found" });
  }
  const post = { ...data.posts[postIndex], ...req.body };
  data.posts[postIndex] = post;
  res.json({ data: post, errors: null, message: "Post updated" });
};

const deletePost = async (req, res) => {
  const postIndex = data.posts.findIndex((post) => post.id === req.params.id);
  if (postIndex < 0) {
    return res
      .status(404)
      .json({ data: null, errors: null, message: "Post not found" });
  }
  const post = data.posts.splice(postIndex, 1)[0];
  res.json({ data: post, errors: null, message: "Post deleted" });
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
