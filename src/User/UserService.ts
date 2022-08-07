import {User} from './User'
export class UserService{
    Users:User[];
    constructor(){
        this.Users = [];
    }
    createUser(User : User):String{
        this.Users.push(User);
        return "success";
    }
    getUsers():User[]{
        return this.Users;
    }
    getUser(index : number):User{
        return this.Users[index];
    }
    updateUser(index : number, User : User):String{
       this.Users[index]  = User;
       return "success";
    }
    deleteUser(index : number):String{
        this.Users.splice(index, 1);
        return "success";
    }     

}