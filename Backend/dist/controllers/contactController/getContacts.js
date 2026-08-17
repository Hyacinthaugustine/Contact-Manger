"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncErrorHandler_1 = __importDefault(require("../../middleware/asyncErrorHandler"));
const contactModel_1 = __importDefault(require("../../models/contactModel"));
const getContacts = (0, asyncErrorHandler_1.default)(async (req, res) => {
    const contacts = await contactModel_1.default.find();
    res.status(200).json({ contacts });
});
exports.default = getContacts;
