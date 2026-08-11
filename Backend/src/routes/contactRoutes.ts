import { Router } from "express";
import getContacts from "../controllers/contactController/getContacts";
import postContacts from "../controllers/contactController/postContact";
import updateContact from "../controllers/contactController/putContact";
import getSingleConatactById from "../controllers/contactController/getContact";
import deleteContact from "../controllers/contactController/deleteContact";

const ContactRouter = Router();

ContactRouter.get("/", getContacts);
ContactRouter.post("/", postContacts);
ContactRouter.put("/:id", updateContact);
ContactRouter.get("/:id", getSingleConatactById);
ContactRouter.delete("/:id", deleteContact);

export default ContactRouter;
