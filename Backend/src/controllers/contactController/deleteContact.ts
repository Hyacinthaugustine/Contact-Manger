import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";
import Contact from "../../models/contactModel";

const deleteContact = asyncErrorHandler(async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error(`Contact with ${req.params.id} not found`);
  }

  if (contact.user.id.toString() !== req.user?.id) {
    res.status(403);
    throw new Error("You can't delete another persons contacts");
  }

  const deletedContact = await contact.remove();

  res.status(200).json(deletedContact);
});

export default deleteContact;
