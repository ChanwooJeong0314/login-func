"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserService_1 = require("./UserService");
const router = express_1.default.Router();
const userService = new UserService_1.UserService();
router.get("/", (req, res) => {
    res.send(userService.getUsers());
});
router.get("/:name", (req, res) => {
    const { name } = req.params;
    res.send(userService.getUser(name));
});
router.post('/', (req, res) => {
    const user = req.body;
    res.send(userService.signup(user));
});
router.put("/:name/:password", (req, res) => {
    const { name, password } = req.params;
    const user = { name: name, password: password };
    res.send(userService.login(user));
});
router.put("/:name/:password", (req, res) => {
    const { name } = req.params;
    res.send(userService.logout(name));
});
router.delete("/:name/:password", (req, res) => {
    const { name, password } = req.params;
    res.send(userService.withdrawal(name, password));
});
module.exports = router;
