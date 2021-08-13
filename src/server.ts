import express from 'express';

import { categoriesRoutes } from './routes/categories.routes'

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.get("/", (req,res) => {
    console.log("hello world!");
    res.send("Hello world");
})

app.post("/courses", (req,res) => {
    const {name} = req.body;

    return res.json({name});
})

app.listen(3333, () => console.log("Server is running!"));

