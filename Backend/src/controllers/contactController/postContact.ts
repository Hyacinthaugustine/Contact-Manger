import { Request, Response } from "express";
import { contactTypes } from "../../types";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";

const postContacts = asyncErrorHandler(async (req: Request, res: Response) => {
  console.log("Request body:", req.body);

  const { name, email, phoneNumber, description }: contactTypes =
    req.body || {};

  if (!name || !email || !phoneNumber) {
    res.status(400);
    throw new Error("All fields are required.");
  }

  res.status(201).json({
    message: "New Contact added",
  });
});

export default postContacts;
