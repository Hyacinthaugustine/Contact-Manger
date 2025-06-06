require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const mdbAccessCode = process.env.mdbAccessCode;

const app = express();
mongoose.connect(mdbAccessCode);

// define how data will be represented in mongodb
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const userModel = mongoose.model("users", userSchema);

const user1 = userModel({
  name: "Hyacinth",
  age: 22,
});

const user2 = userModel({
  name: "Mark",
  age: 32,
});

const user3 = userModel({
  name: "Alex",
  age: 29,
});

user1.save();
user2.save();
user3.save();

console.log("ENV DB URI:", process.env.mdbAccessCode);
app.listen(PORT, () => {
  console.log("server is running on port 2003");
});
