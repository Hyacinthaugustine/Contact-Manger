import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";

const updateContact = asyncErrorHandler(async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: `conatct with ${req.params.id} has been updated` });
});

export default updateContact;
