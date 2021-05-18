const { Router } = require("express");
const authController = require("../controllers/auth");

const router = Router();

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

module.exports = router;
