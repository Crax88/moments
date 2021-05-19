const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

module.exports = (payload) => {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: payload.remeber ? "365d" : "1h",
      });
      resolve(token);
    } catch (error) {
      reject();
    }
  });
};
