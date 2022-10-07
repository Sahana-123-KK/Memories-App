const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./connect/connect");
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
connect();

app.listen(port, () => {
  console.log(`Memories App Backend running in port ${port} ...`);
});

app.use("/api/posts", require("./router/posts"));
