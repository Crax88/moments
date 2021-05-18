const { Router } = require("express");
const postController = require("../controllers/posts");

const router = Router();

router
  .route("/")
  .get(postController.getPosts)
  .post(postController.createPost)
  .put(postController.updatePost);

router
  .route("/:id")
  .get(postController.getPostById)
  .delete(postController.deletePost);

module.exports = router;
