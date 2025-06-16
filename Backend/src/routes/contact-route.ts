import express from "express";
import {
  createContact,
  getContacts,
  deleteContact,
  updateContact,
} from "../controllers/contact";

const router = express.Router();

router.get("/contacts", getContacts);
router.post("/contacts", createContact);
router.delete("/contacts/:id", deleteContact);
router.put("/contacts/:id", updateContact);

export default router;
