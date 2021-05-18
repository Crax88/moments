const { Router } = require("express");
const authController = require("../controllers/auth");
const auth = require("../middlewares/auth");

const router = Router();

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router.route("/me").get(auth, authController.getMe);

module.exports = router;
