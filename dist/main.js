"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
const userRouter = require('./User/UserController');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
