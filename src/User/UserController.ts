import express from 'express';
const router = express.Router();
import { UserService } from './UserService';
const userService : UserService= new UserService();

router.get("/",(req,res)=>{
    res.send(userService.getUsers());
});
router.get("/:index",(req,res)=>{
    res.json(userService.getUser(parseInt(req.params.index)));
});
router.post("/",(req,res)=>{
    res.send(userService.createUser(req.body));
})
router.put("/:index",(req,res)=>{
    res.send(userService.updateUser(parseInt(req.params.index),req.body));
})
router.delete("/:index",(req,res)=>{
    res.send(userService.deleteUser(parseInt(req.params.index)));
})


module.exports = router;

