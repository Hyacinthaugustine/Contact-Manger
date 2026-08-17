"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncErrorHandler_1 = __importDefault(require("../../middleware/asyncErrorHandler"));
const contactModel_1 = __importDefault(require("../../models/contactModel"));
const postContacts = (0, asyncErrorHandler_1.default)(async (req, res) => {
    console.log("Request body:", req.body);
    const { name, email, phoneNumber, description } = req.body || {};
    if (!name || !email || !phoneNumber) {
        res.status(400);
        throw new Error("All fields are required.");
    }
    if (!req.user?.id) {
        res.status(401);
        throw new Error("User not authenticated");
    }
    const contact = await contactModel_1.default.create({
        name,
        email,
        phoneNumber,
        description,
        user_id: req.user.id,
    });
    res.status(201).json(contact);
});
exports.default = postContacts;
