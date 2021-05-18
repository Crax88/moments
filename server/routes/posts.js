const { Router } = require("express");
const postController = require("../controllers/posts");
const auth = require("../middlewares/auth");

const router = Router();

router
  .route("/")
  .get(postController.getPosts)
  .post(auth, postController.createPost)
  .put(auth, postController.updatePost);

router
  .route("/:id")
  .get(postController.getPostById)
  .delete(auth, postController.deletePost);

module.exports = router;
