import express from 'express';
const app = express();
const port : number = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port,()=> console.log(`listening on http://localhost:${port}`));