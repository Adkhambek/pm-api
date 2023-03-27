"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET_KEY = exports.mongoDB = exports.PORT = void 0;
require("dotenv").config();
exports.PORT = process.env.PORT || 3000;
exports.mongoDB = {
    username: process.env.MD_USERNAME,
    password: process.env.MD_PASSWORD,
    clasterInfo: "cluster0.lanoahy",
};
exports.SECRET_KEY = "myVerySecretKey-04.05.2022";
