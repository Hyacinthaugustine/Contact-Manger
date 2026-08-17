"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncErrorHandler_1 = __importDefault(require("../../middleware/asyncErrorHandler"));
const contactModel_1 = __importDefault(require("../../models/contactModel"));
const updateContact = (0, asyncErrorHandler_1.default)(async (req, res) => {
    const contact = await contactModel_1.default.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error(`Contact with ${req.params.id} is not found`);
    }
    const updatedContact = await contactModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContact);
});
exports.default = updateContact;
