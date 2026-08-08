import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";

const deleteContact = asyncErrorHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: `conatact with ${req.params.id} has been deleted.`,
  });
});

export default deleteContact;
