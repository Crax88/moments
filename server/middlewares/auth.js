const jwt = require("jsonwebtoken");
const createAuthToken = require("../utils/createAuthToken");
const { JWT_SECRET } = require("../config/config");

const auth = async (req, res, next) => {
  const token = req.signedCookies.authToken;
  if (!token)
    return res.status(401).json({
      errors: { error: "Not authenticated" },
      message: "Please signin",
    });

  try {
    const decoded = await jwt.verify(token, JWT_SECRET);
    const prolongToken = createAuthToken(decoded);
    req.user = decoded;
    res.cookie("authToken", prolongToken, {
      httpOnly: true,
      maxAge: decoded.remeber ? 3600 * 1000 * 24 * 365 : 3600 * 1000,
      signed: true,
    });
    next();
  } catch (error) {
    return res.status(401).json({
      errors: {
        error: "Authentication failed",
      },
      message: "Authentication failed",
    });
  }
};

module.exports = auth;
