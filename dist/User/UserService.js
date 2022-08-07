"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor() {
        this.Users = [];
    }
    createUser(User) {
        this.Users.push(User);
        return "success";
    }
    getUsers() {
        return this.Users;
    }
    getUser(index) {
        return this.Users[index];
    }
    updateUser(index, User) {
        this.Users[index] = User;
        return "success";
    }
    deleteUser(index) {
        this.Users.splice(index, 1);
        return "success";
    }
}
exports.UserService = UserService;
