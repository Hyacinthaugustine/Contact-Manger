import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";
import Contact from "../../models/contactModel";

const updateContact = asyncErrorHandler(async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error(`Contact with ${req.params.id} is not found`);
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );

  res.status(200).json(updatedContact);
});

export default updateContact;
