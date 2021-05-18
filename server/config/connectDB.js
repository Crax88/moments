const mongoose = require("mongoose");
const config = require("./config.js");

const connect = () => {
  return mongoose.connect(
    `${config.MONGO_IP}://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.ebc2z.mongodb.net/${config.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
};

module.exports = connect;
