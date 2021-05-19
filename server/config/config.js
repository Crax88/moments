module.exports = {
  PORT: process.env.PORT || 3000,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_IP: process.env.MONGO_IP || "mongodb+srv",
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
};
