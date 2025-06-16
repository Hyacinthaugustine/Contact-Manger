import { Request, Response } from "express";
import UserModel from "../models/usersModel";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (user) {
    if (user.password === password) {
      res.json("Success");
    } else {
      res.json("Password isn't correct");
    }
  } else {
    res.json("No record found");
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};
