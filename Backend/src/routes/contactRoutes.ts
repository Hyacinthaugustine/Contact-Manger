import { Router, Request, Response } from "express";

const ContactRouter = Router();

ContactRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "hollosssss" });
});

ContactRouter.post("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Create a new contact" });
});

ContactRouter.put("/:id", (req: Request, res: Response) => {
  res.status(200).json({ message: `Contact with id ${req.params.id} updated` });
});

ContactRouter.get("/:id", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "this method id to get a single contact by it id" });
});

ContactRouter.delete("/:id", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: `contact Deleted for this id = ${req.params.id}` });
});

export default ContactRouter;
