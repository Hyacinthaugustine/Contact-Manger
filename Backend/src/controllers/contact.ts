import { Request, Response } from "express";
import ContactModel from "../models/ContactDetailModel";

export const createContact = async (req: Request, res: Response) => {
  try {
    const contact = await ContactModel.create(req.body);
    res.json(contact);
  } catch (error) {
    res.json(error);
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await ContactModel.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching contacts" });
  }
};

// DELETE a contact
export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ContactModel.findByIdAndDelete(id);
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "faiiled deleting contact" });
  }
};

// UPDATE a contact
export const updateContact = async (req: Request, res: Response) => {
  try {
    const updatedContact = await ContactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedContact);
  } catch (err) {
    res.status(500).json({ error: "Failed to update contact" });
  }
};
