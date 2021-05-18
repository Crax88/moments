const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./config/config");

const app = express();

app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ extended: true, limit: "30mb" }));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
