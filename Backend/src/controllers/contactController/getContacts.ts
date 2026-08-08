import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";

const getContacts = asyncErrorHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "get all contacts" });
});

export default getContacts;
