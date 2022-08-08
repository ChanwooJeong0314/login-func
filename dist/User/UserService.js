"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor() {
        this.users = [];
    }
    //GET
    getUsers() {
        return this.users;
    }
    getUser(name) {
        const users = this.getUsers();
        const user = users[users.findIndex(user => user.name === name)];
        return user;
    }
    //POST
    createUser(user) {
        this.users.push(user);
    }
    signup(user) {
        const users = this.getUsers();
        let userNames = [];
        users.forEach(user => {
            userNames.push(user.name);
        });
        if (!(userNames.includes(user.name))) {
            this.createUser(user);
            return 'success';
        }
        return 'failed';
    }
    //PUT
    login(user) {
        const loginUser = this.getUser(user.name);
        const users = this.getUsers();
        let result = '';
        users.forEach(user => {
            if (user.name === loginUser.name && user.password === loginUser.password) {
                this.getUser(user.name).isOnline = true;
                result = "success";
            }
            result = "success";
        });
        return result;
    }
    logout(name) {
        const users = this.getUsers();
        let result = '';
        users.forEach(user => {
            if (user.name === name) {
                this.getUser(user.name).isOnline = false;
                result = "success";
            }
            result = "failed";
        });
        return result;
    }
    withdrawal(name, password) {
        const users = this.getUsers();
        const userIndex = users.findIndex(user => user.name === name && user.password === password);
        if (userIndex === -1) {
            return "failed";
        }
        else {
            this.users.splice(userIndex, 1);
            return "success";
        }
    }
}
exports.UserService = UserService;
