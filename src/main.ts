import express from 'express';
const app = express();
const port : number = 3000;


//router setting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//controllers
app.use("/user",UserController);

//listening port
app.listen(port,()=> console.log(`listening on http://localhost:${port}`));
