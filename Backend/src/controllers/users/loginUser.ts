import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../../models/userModel";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";

const logInUser = asyncErrorHandler(async (req: Request, res: Response) => {
  const { password, email } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All Fields are required"!);
  }

  const checkIfUserExist = await User.findOne({ email });

  if (
    checkIfUserExist &&
    (await bcrypt.compare(password, checkIfUserExist.password))
  )
    res.status(200).json({ message: "user logged in... welcome" });
});
export default logInUser;
