"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const asyncErrorHandler_1 = __importDefault(require("../../middleware/asyncErrorHandler"));
const userModel_1 = __importDefault(require("../../models/userModel"));
const registerUser = (0, asyncErrorHandler_1.default)(async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        res.status(400);
        throw new Error("All Fields are required!");
    }
    const userAvailable = await userModel_1.default.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error(`${email} already exist!`);
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const newUser = await userModel_1.default.create({
        userName,
        email,
        password: hashedPassword,
    });
    if (newUser) {
        res.status(201).json({
            message: "New user account created",
            user: {
                id: newUser._id,
                userName: newUser.userName,
                email: newUser.email,
            },
        });
    }
    else {
        res.status(400);
        throw new Error("User data was not valid");
    }
    console.log(`user created  ${newUser}`);
});
exports.default = registerUser;
