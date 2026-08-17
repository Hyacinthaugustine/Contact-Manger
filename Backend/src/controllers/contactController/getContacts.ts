import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";
import Contact from "../../models/contactModel";

const getContacts = asyncErrorHandler(async (req: Request, res: Response) => {
  const contacts = await Contact.find({
    user_id: req.user.id,
  });
  res.status(200).json({ contacts });
});

export default getContacts;
