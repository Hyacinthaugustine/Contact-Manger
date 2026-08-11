import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";
import Contact from "../../models/contactModel";

const getSingleConatactById = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const getContact = await Contact.findById(req.params.id);

    if (!getContact) {
      res.status(404);
      throw new Error(`contact with ${req.params.id} is not found`);
    }

    res.status(200).json(getContact);
  },
);
export default getSingleConatactById;
