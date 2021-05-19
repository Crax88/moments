const { Router } = require("express");
const postController = require("../controllers/posts");
const auth = require("../middlewares/auth");
const asyncHandler = require("../middlewares/async");
const upload = require("../middlewares/imageUpload");

const router = Router();

router
  .route("/")
  .get(asyncHandler(postController.getPosts))
  .post(auth, upload.single("file"), asyncHandler(postController.createPost))
  .put(auth, asyncHandler(postController.updatePost));

router
  .route("/:id")
  .get(asyncHandler(postController.getPostById))
  .delete(auth, asyncHandler(postController.deletePost));

module.exports = router;
