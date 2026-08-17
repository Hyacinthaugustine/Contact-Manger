"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggedOutUser = (req, res) => {
    res.status(200).json({ message: "this is user is logged out" });
};
exports.default = loggedOutUser;
