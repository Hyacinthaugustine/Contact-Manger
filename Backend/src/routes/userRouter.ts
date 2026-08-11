import { NextFunction, Request, Response, Router } from "express";

import logInUser from "../controllers/users/loginUser";
import registerUser from "../controllers/users/registerUser";
import getCurrentUser from "../controllers/users/getCurrentUser";
import loggedOutUser from "../controllers/users/loggedOutUser";

const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", logInUser);

userRouter.get("/current", getCurrentUser);

userRouter.post("/logout", loggedOutUser);

export default userRouter;
