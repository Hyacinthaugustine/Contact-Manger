"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../constants/errors");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case errors_1.constants.VALIATION_EROOR:
            res.status(statusCode).json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case errors_1.constants.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
        case errors_1.constants.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });
        case errors_1.constants.FORBIDDEN:
            res.status(statusCode).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
        case errors_1.constants.SERVER_ERROR:
            res.status(statusCode).json({
                title: "Sever Error",
                message: err.message,
                stackTrace: err.stack,
            });
        default:
            console.log("No Error, All good");
    }
};
exports.default = errorHandler;
