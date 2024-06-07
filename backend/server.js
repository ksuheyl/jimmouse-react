const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const mainRoute = require("./routes/index.js");
const logger = require("morgan");


const app = express();
const router = express();
dotenv.config();


//routes
//static middlewares
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use("/api", mainRoute);

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection successful");
  } catch (error) {
    throw error;
  }
};

const port = 3000;
app.listen(port, () => {
  conn();
  console.log(`Server is running port: http://127.0.0.1:${port}`);
});
