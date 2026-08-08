import { Request, Response } from "express";
import asyncErrorHandler from "../../middleware/asyncErrorHandler";

const getSingleConatactById = asyncErrorHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({ message: `get contact with ${req.params.id} id` });
  },
);
export default getSingleConatactById;
