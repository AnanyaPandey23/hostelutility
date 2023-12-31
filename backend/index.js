const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const db = require("./DbConnection/DbConfig");
const userRoute = require("./Routes/UserRouter");

const app = express();
app.use(bodyparser.json());
app.use(
  cors({
    origin: "https://hostelutility-frontend.vercel.app",
    // origin: "http://localhost:9000",
    credentials: true,
  })
);
app.use("/user", userRoute);

module.exports = app;
