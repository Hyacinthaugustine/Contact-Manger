"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCurrentUser = (req, res) => {
    res.status(200).json(req.user);
};
exports.default = getCurrentUser;
