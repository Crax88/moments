const { Router } = require("express");
const authController = require("../controllers/auth");
const auth = require("../middlewares/auth");
const asyncHandler = require("../middlewares/async");

const router = Router();

router.route("/register").post(asyncHandler(authController.register));

router.route("/login").post(asyncHandler(authController.login));

router.route("/me").get(auth, asyncHandler(authController.getMe));

module.exports = router;
