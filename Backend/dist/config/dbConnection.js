"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const mongoURI = process.env.mdbAccessCode;
        if (!mongoURI) {
            throw new Error("MongoDB connection string is not defined");
        }
        const connect = await mongoose_1.default.connect(mongoURI);
        console.log("Connection successful", connect.connection.host, connect.connection.name);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};
exports.default = connectDB;
