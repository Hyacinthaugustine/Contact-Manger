import { Request, Response } from "express";

const logInUser = (req: Request, res: Response) =>
  res.status(200).json({ message: "user logged in... welcome" });

export default logInUser;
