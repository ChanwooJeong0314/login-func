"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const UserService_1 = require("./UserService");
const userService = new UserService_1.UserService();
router.get("/", (req, res) => {
    res.send(userService.getUsers());
});
router.get("/:index", (req, res) => {
    res.json(userService.getUser(parseInt(req.params.index)));
});
router.post("/", (req, res) => {
    res.send(userService.createUser(req.body));
});
router.put("/:index", (req, res) => {
    res.send(userService.updateUser(parseInt(req.params.index), req.body));
});
router.delete("/:index", (req, res) => {
    res.send(userService.deleteUser(parseInt(req.params.index)));
});
module.exports = router;
