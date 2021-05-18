const User = require("../models/user");

const register = async (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({
      data: req.body,
      errors: {
        password: "Passwords do not match",
      },
    });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        data: req.body,
        errors: {
          email: "Email already exists",
        },
      });
    }
    const { email, password, nickname } = req.body;
    user = new User({ email, password, nickname });
    await user.save();
    res.json({ data: user, errors: null, message: "Register success" });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  if (!req.body.password) {
    return res.status(400).json({
      data: req.body,
      errors: {
        password: "Please provide password",
      },
    });
  }
  if (!req.body.email) {
    return res.status(400).json({
      data: req.body,
      errors: {
        email: "Please provide email",
      },
    });
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
    res.json({ data: user, errors: null, message: "Login success" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { register, login };
