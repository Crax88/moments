const path = require("path");
const fs = require("fs");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./config/config");
const connectDb = require("./config/connectDB");
const postsRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");

const app = express();

app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.static("public"));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}
app.use("/api/posts", postsRoutes);
app.use("/api/auth", authRoutes);

connectDb().then(() => {
  console.log("Connected to mongo");
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
