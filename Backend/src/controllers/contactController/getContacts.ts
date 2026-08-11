import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";
import Contact from "../../models/contactModel";

const getContacts = asyncErrorHandler(async (req: Request, res: Response) => {
  const contacts = await Contact.find();
  res.status(200).json({ contacts });
});

export default getContacts;
