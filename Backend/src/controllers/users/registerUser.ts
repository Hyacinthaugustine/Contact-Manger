import { NextFunction, Request, Response } from "express";

const registerUser = (req: Request, res: Response) => {
  res.status(201).json({ message: "new usee account created" });
};

export default registerUser;
