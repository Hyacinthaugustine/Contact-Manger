"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncErrorHandler_1 = __importDefault(require("./asyncErrorHandler"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateUsers = (0, asyncErrorHandler_1.default)(async (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECERT;
        if (!accessTokenSecret) {
            res.status(500);
            throw new Error("Server misconfiguration: missing token secret");
        }
        jsonwebtoken_1.default.verify(token, accessTokenSecret, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User not authorized");
            }
            if (typeof decoded === "object" &&
                decoded !== null &&
                decoded.user) {
                req.user = decoded.user;
            }
            next();
        });
        if (!token) {
            res.status(401);
            throw new Error("User is not authorized  or missing token");
        }
    }
    else {
        res.status(401);
        throw new Error("Authorization header missing or malformed");
    }
});
exports.default = validateUsers;
