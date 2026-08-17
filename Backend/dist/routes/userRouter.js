"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginUser_1 = __importDefault(require("../controllers/users/loginUser"));
const registerUser_1 = __importDefault(require("../controllers/users/registerUser"));
const getCurrentUser_1 = __importDefault(require("../controllers/users/getCurrentUser"));
const loggedOutUser_1 = __importDefault(require("../controllers/users/loggedOutUser"));
const validatUsers_1 = __importDefault(require("../middleware/validatUsers"));
const userRouter = (0, express_1.Router)();
userRouter.post("/register", registerUser_1.default);
userRouter.post("/login", loginUser_1.default);
userRouter.get("/current", validatUsers_1.default, getCurrentUser_1.default);
userRouter.post("/logout", loggedOutUser_1.default);
exports.default = userRouter;
