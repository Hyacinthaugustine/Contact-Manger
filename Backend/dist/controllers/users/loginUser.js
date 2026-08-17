"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../../models/userModel"));
const asyncErrorHandler_1 = __importDefault(require("../../middleware/asyncErrorHandler"));
const logInUser = (0, asyncErrorHandler_1.default)(async (req, res) => {
    const { password, email } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All Fields are required!");
    }
    const checkIfUserExist = await userModel_1.default.findOne({ email });
    if (checkIfUserExist &&
        (await bcrypt_1.default.compare(password, checkIfUserExist.password))) {
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECERT;
        if (!accessTokenSecret) {
            res.status(500);
            throw new Error("Server misconfiguration: missing token secret");
        }
        const UserAccessToken = jsonwebtoken_1.default.sign({
            user: {
                userName: checkIfUserExist.userName,
                email: checkIfUserExist.email,
                id: checkIfUserExist.id,
            },
        }, accessTokenSecret, { expiresIn: "10m" });
        res.status(200).json({ accessToken: UserAccessToken });
    }
    else {
        res.status(401);
        throw new Error("Email or password is not valid.");
    }
});
exports.default = logInUser;
