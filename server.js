import express from "express";
import cors from "cors";
import pkg from "body-parser";
import knex from "knex";
import bcrypt from "bcrypt";

const db = {
    username: "Arnold",
    password: "1234"
}

const app = express();

app.use(cors());

app.use(express.json());

const { json } = pkg;

app.use(json());

app.get("/", (req, res) => { res.send("success") });


app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json("incorrect form submission");
    }
    if (username === db.username && password === db.password) {
        res.json("success");
    } else {
        res.status(400).json("error logging in");
    }
})

app.listen(3000,() => {
    console.log("Server is running on port 3000");
})
