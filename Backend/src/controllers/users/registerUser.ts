import { Request, Response } from "express";
import bcrypt from "bcrypt";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";
import User from "../../models/userModel";

const registerUser = asyncErrorHandler(async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All Fields are required!");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error(`${email} already exist!`);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({
      message: "New user account created",
      user: {
        id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
      },
    });
  } else {
    res.status(400);
    throw new Error("User data was not valid");
  }
  console.log(`user created  ${newUser}`);
});
export default registerUser;
