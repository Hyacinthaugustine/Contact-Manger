import { Request, Response } from "express";

const getCurrentUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "curerent loged in user details" });
};
export default getCurrentUser;
