"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
(0, dotenv_1.config)();
(0, dbConnection_1.default)();
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/contacts", contactRoutes_1.default);
app.use("/api/users", userRouter_1.default);
app.use(errorHandler_1.default);
app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});
