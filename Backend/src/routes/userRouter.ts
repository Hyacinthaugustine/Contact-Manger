import { Router } from "express";

import logInUser from "../controllers/users/loginUser";
import registerUser from "../controllers/users/registerUser";
import getCurrentUser from "../controllers/users/getCurrentUser";
import loggedOutUser from "../controllers/users/loggedOutUser";
import validateUsers from "../middleware/validatUsers";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", logInUser);
userRouter.get("/current", validateUsers, getCurrentUser);
userRouter.post("/logout", loggedOutUser);

export default userRouter;
