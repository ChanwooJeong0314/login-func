import  express  from "express";
import { User } from "./User";
import { UserService } from "./UserService";
const router = express.Router();
const userService = new UserService();
router.get("/",(req,res)=>{
    res.send(userService.getUsers());
})
router.get("/:name",(req,res)=>{
    const {name} = req.params;
    res.send(userService.getUser(name));
})
router.get("/:name/:password",(req,res)=>{
    const {name , password} = req.params;
    const user : User = {name , password};
    res.send(userService.login(user));
})
router.post('/',(req,res)=>{
    const user : User = req.body;
    res.send(userService.signup(user));
});

router.delete("/:name/:password"  ,(req,res)=>{
    const { name , password}= req.params;
    res.send(userService.withdrawal(name,password));
    
});

module.exports = router;