module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_IP: process.env.MONGO_IP || "mongodb+srv",
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
};
