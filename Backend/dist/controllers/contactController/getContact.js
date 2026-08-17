"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncErrorHandler_1 = __importDefault(require("../../middleware/asyncErrorHandler"));
const contactModel_1 = __importDefault(require("../../models/contactModel"));
const getSingleConatactById = (0, asyncErrorHandler_1.default)(async (req, res) => {
    const getContact = await contactModel_1.default.findOne({
        _id: req.params.id,
        user_id: req.user.id,
    });
    if (!getContact) {
        res.status(404);
        throw new Error(`Contact with ${req.params.id} is not found`);
    }
    res.status(200).json(getContact);
});
exports.default = getSingleConatactById;
