import express from 'express';
const app = express();
const port : number = 3000;
const userRouter = require('./User/UserController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user",userRouter);

app.listen(port,()=> console.log(`listening on http://localhost:${port}`));