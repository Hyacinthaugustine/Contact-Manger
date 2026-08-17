import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../../models/userModel";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";

const logInUser = asyncErrorHandler(async (req: Request, res: Response) => {
  const { password, email } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All Fields are required!");
  }

  const checkIfUserExist = await User.findOne({ email });

  if (
    checkIfUserExist &&
    (await bcrypt.compare(password, checkIfUserExist.password))
  ) {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECERT;

    if (!accessTokenSecret) {
      res.status(500);
      throw new Error("Server misconfiguration: missing token secret");
    }

    const UserAccessToken = jwt.sign(
      {
        user: {
          userName: checkIfUserExist.userName,
          email: checkIfUserExist.email,
          id: checkIfUserExist.id,
        },
      },
      accessTokenSecret,
      { expiresIn: "10m" },
    );

    res.status(200).json({ accessToken: UserAccessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid.");
  }
});

export default logInUser;
