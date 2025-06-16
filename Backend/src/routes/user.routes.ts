import express from "express";
import { loginUser, createUser } from "../controllers/user";

const router = express.Router();

router.post("/users", createUser);
router.post("/login", loginUser);

export default router;
