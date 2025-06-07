const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/usersModel"); // or ./Models/UserModel

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.mdbAccessCode as string;

mongoose
  .connect(DB_URI)
  .then(() => console.log("DB connected"))
  .catch(console.error);

// login
app.post("/", (req: express.Request, res: Expression.Response) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("Success");
      } else {
        res.json("passowrd isnt corrrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

// sign up
app.post("/users", async (req: express.Request, res: express.Response) => {
  UserModel.create(req.body)
    .then((UserModel) => res.json(UserModel))
    .catch((error) => res.json(error));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
