import { Request, Response } from "express";
import { contactTypes } from "../../types";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";
import Contact from "../../models/contactModel";

const postContacts = asyncErrorHandler(async (req: Request, res: Response) => {
  console.log("Request body:", req.body);

  const { name, email, phoneNumber, description }: contactTypes =
    req.body || {};

  if (!name || !email || !phoneNumber) {
    res.status(400);
    throw new Error("All fields are required.");
  }

  if (!(req as any).user?.id) {
    res.status(401);
    throw new Error("User not authenticated");
  }

  const contact = await Contact.create({
    name,
    email,
    phoneNumber,
    description,
    user_id: (req as any).user.id,
  });

  res.status(201).json(contact);
});

export default postContacts;
