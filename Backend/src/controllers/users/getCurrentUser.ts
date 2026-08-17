import { Request, Response } from "express";

const getCurrentUser = (req: Request, res: Response) => {
  res.status(200).json(req.user);
};
export default getCurrentUser;
