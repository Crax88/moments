const User = require("../models/user");
const createAuthToken = require("../utils/createAuthToken");
const Validator = require("../utils/Validator");

const register = async (req, res) => {
  try {
    const { errors } = await Validator.validateRegister(req.body);
    if (errors) {
      return res.status(400).json({ data: null, errors, mesage: null });
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        data: req.body,
        errors: {
          email: "Email already exists",
        },
      });
    }
    const { email, password, nickname, remember } = req.body;
    user = new User({ email, password, nickname });
    const token = await createAuthToken({ _id: user._id, remember });
    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: remember ? 3600 * 1000 * 24 * 365 : 3600 * 1000,
      signed: true,
    });
    res.json({
      data: { email, nickname, _id: user._id },
      errors: null,
      message: "Register success",
    });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  const { errors } = Validator.validateLogin(req.body);
  if (errors) {
    return res.status(400).json({ data: null, errors, mesage: null });
  }
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        data: req.body,
        errors: {
          error: "Incorrect email or password",
        },
      });
    }

    const match = await user.matchPassword(req.body.password);
    if (!match) {
      return res.status(400).json({
        data: req.body,
        errors: {
          error: "Incorrect email or password",
        },
      });
    }
    const token = await createAuthToken({
      _id: user._id,
      remember: req.body.remember,
    });
    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: req.body.remember ? 3600 * 1000 * 24 * 365 : 3600 * 1000,
      signed: true,
    });
    res.json({
      data: { _id: user._id, email: user.email, nickname: user.nickname },
      errors: null,
      message: "Login success",
    });
  } catch (error) {
    console.error(error);
  }
};

const getMe = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id).select("-password");
    res.json({ data: user, errors: null });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { register, login, getMe };
