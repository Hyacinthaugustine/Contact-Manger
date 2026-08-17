"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncErrorHandler_1 = __importDefault(require("../../middleware/asyncErrorHandler"));
const contactModel_1 = __importDefault(require("../../models/contactModel"));
const deleteContact = (0, asyncErrorHandler_1.default)(async (req, res) => {
    const contact = await contactModel_1.default.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error(`Contact with ${req.params.id} not found`);
    }
    const deletedContact = await contact.remove();
    res.status(200).json(deletedContact);
});
exports.default = deleteContact;
