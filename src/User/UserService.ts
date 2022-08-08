import {User} from './User';
export class UserService{
    users : User[];
    constructor() {
        this.users = [];
    }
    //GET
    getUsers():User[]{
        return this.users
    }
    getUser(name : string):User{
        const users = this.getUsers();
        const user = users[users.findIndex(user => user.name === name)];
        return user;
    }
    //POST
    createUser(user:User){
        this.users.push(user);
    }
    signup(user : User):string{
        const users = this.getUsers();
        let userNames : string[]= [];
        users.forEach(user => {
            userNames.push(user.name);
        });
       
        if(!(userNames.includes(user.name))){
            this.createUser(user);
            return 'success';
        }
        return 'failed';
    
            
    }
    //PUT
    login(user :  User):boolean{
       const loginUser = this.getUser(user.name);
       const users = this.getUsers();
       let result :boolean = false;
       users.forEach( user =>{
            if(user.name === loginUser.name && user.password === loginUser.password){
            
             result = true;
            }
            result = false;
        }
       );
       return result;
    }
 
    withdrawal(name:string, password:string):string{
        const users = this.getUsers();
        const userIndex = users.findIndex(user => user.name === name && user.password === password);
        if (userIndex === -1){
            return "failed";
        }else{
            this.users.splice(userIndex,1);
            return "success";
        }
        

    }

}