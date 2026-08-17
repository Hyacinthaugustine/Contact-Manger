"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getContacts_1 = __importDefault(require("../controllers/contactController/getContacts"));
const postContact_1 = __importDefault(require("../controllers/contactController/postContact"));
const putContact_1 = __importDefault(require("../controllers/contactController/putContact"));
const getContact_1 = __importDefault(require("../controllers/contactController/getContact"));
const deleteContact_1 = __importDefault(require("../controllers/contactController/deleteContact"));
const validatUsers_1 = __importDefault(require("../middleware/validatUsers"));
const ContactRouter = (0, express_1.Router)();
ContactRouter.get("/", validatUsers_1.default, getContacts_1.default);
ContactRouter.post("/", validatUsers_1.default, postContact_1.default);
ContactRouter.put("/:id", validatUsers_1.default, putContact_1.default);
ContactRouter.get("/:id", validatUsers_1.default, getContact_1.default);
ContactRouter.delete("/:id", validatUsers_1.default, deleteContact_1.default);
exports.default = ContactRouter;
