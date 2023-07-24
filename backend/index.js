const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const db = require("./DbConnection/DbConfig");
const userRoute = require("./Routes/UserRouter");

const app = express();
app.use(bodyparser.json());
app.use(
  cors({
    origin: "https://hostelutilityfrontend.vercel.app",
    credentials: true,
  })
);
app.use("/user", userRoute);

app.listen(
  process.env.PORT,
  console.log(`server listening to the port ${process.env.PORT}`)
);
