import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import usersRouter from "./routes/api/users.js";

dotenv.config()

const {DB_HOST, PORT = 3000} = process.env;

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/users", usersRouter);

app.use((req, res) => {
    return res.status(404).json({
        message: "Not found"
    })
})

app.use((error, req, res, next)=> {
    const {status = 500, message = "Server error"} = error;
    return res.status(status).json({
        message
    })
})

mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })