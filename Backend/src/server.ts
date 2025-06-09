const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/usersModel");
const ConctactModel = require("./Models/ContactDetailModel");

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
app.post("/", (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user: any) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("password isn't correct");
      }
    } else {
      res.json("No record found");
    }
  });
});

// sign up
app.post("/users", async (req: express.Request, res: express.Response) => {
  UserModel.create(req.body)
    .then((user: any) => res.json(user))
    .catch((error: any) => res.json(error));
});

// contact details
app.post(
  "/contact-details",
  async (req: express.Request, res: express.Response) => {
    ConctactModel.create(req.body)
      .then((contact: any) => res.json(contact))
      .catch((error: any) => res.json(error));
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
