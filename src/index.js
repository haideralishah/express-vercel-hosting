import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors("*"));

app.get("/", (req, res) => {
    res.send({ message: 'hello world' });
});

app.listen(process.env.PORT, () => {
    console.log('Server is Live')
});
