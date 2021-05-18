const { Types } = require("mongoose");
const Post = require("../models/post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });
    res.json({ data: posts, errors: null, message: "Posts loaded" });
  } catch (error) {
    console.error(error);
  }
};

const getPostById = async (req, res) => {
  try {
    if (!Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(404)
        .json({ data: null, errors: null, message: "Post not found" });
    }
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res
        .status(404)
        .json({ data: null, errors: null, message: "Post not found" });
    }
    res.json({ data: post, errors: null, message: "Post loaded" });
  } catch (error) {
    console.error(error);
  }
};

const createPost = async (req, res) => {
  const post = new Post({ ...req.body, author: req.user._id });
  try {
    await post.save();
    res.json({ data: post, errors: null, message: "Post created" });
  } catch (error) {
    console.error(error);
  }
};
const updatePost = async (req, res) => {
  try {
    if (!Types.ObjectId.isValid(req.body._id)) {
      return res
        .status(404)
        .json({ data: null, errors: null, message: "Post not found" });
    }
    const post = await Post.findOneAndUpdate(
      { _id: req.body._id, author: req.user._id },
      req.body,
      { new: true }
    );
    if (!post) {
      return res
        .status(404)
        .json({ data: req.body, errors: null, message: "Post not found" });
    }
    res.json({ data: post, errors: null, message: "Post updated" });
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (req, res) => {
  try {
    if (!Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(404)
        .json({ data: null, errors: null, message: "Post not found" });
    }
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        data: req.body,
        errors: null,
        message: "Post not found",
      });
    }
    if (post.author.toString() !== req.user._id) {
      return res.status(403).json({
        data: req.body,
        errors: null,
        message: "Denied, no authorization",
      });
    }
    await post.remove();
    res.json({ data: post, errors: null, message: "Post deleted" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
