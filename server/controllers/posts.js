const { Types } = require("mongoose");
const Post = require("../models/post");
const Validator = require("../utils/Validator");

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
    const { error } = await Validator.validateId(req.params.id);
    if (error) {
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
  const { errors } = await Validator.validatePost({ ...req.body });
  if (errors) {
    return res.status(400).json({
      data: req.body,
      errors,
      message: errors._id ? "Post not found" : null,
    });
  }
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
    const { errors } = await Validator.validatePost(req.body);
    if (errors) {
      const message = errors._id
        ? "Post not found"
        : errors.author
        ? "Invalid author"
        : null;
      return res.status(400).json({ data: req.body, errors, message });
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
    const { error } = await Validator.validateId(req.params.id);
    if (error) {
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
        message: "Can not update others posts",
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
