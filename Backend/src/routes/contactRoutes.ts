import { Router } from "express";
import getContacts from "../controllers/contactController/getContacts";
import postContacts from "../controllers/contactController/postContact";
import updateContact from "../controllers/contactController/putContact";
import getSingleConatactById from "../controllers/contactController/getContact";
import deleteContact from "../controllers/contactController/deleteContact";
import validateUsers from "../middleware/validatUsers";

const ContactRouter = Router();

ContactRouter.get("/", validateUsers, getContacts);
ContactRouter.post("/", validateUsers, postContacts);
ContactRouter.put("/:id", validateUsers, updateContact);
ContactRouter.get("/:id", validateUsers, getSingleConatactById);
ContactRouter.delete("/:id", validateUsers, deleteContact);

export default ContactRouter;
