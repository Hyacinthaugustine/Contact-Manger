import { Request, Response } from "express";

const loggedOutUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "this is user is logged out" });
};

export default loggedOutUser;
