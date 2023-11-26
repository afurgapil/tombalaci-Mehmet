/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const userRouter = require("./routes/userRouter");
const config = require("./config");
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/user", userRouter);

const port = config.PORT || 3000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}.`);
});
