import express from "express";
import cors from "cors";
import pkg from "body-parser";
import bcrypt from "bcrypt";
import handleRegistration from "./controllers/register.js";
import handleSignIn from "./controllers/signin.js";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Luxe-Hotel",
    password: "Jibstaar96",
    port: 5432
});

const app = express();

app.use(cors());

app.use(express.json());

const { json } = pkg;

app.use(json());

app.get("/", (req, res) => { res.send("success") });

app.post("/register", (req, res) => handleRegistration(req, res, pool, bcrypt));

app.post("/signin", (req, res) =>  handleSignIn(req, res, pool, bcrypt));

app.delete("/profile/:id", (req, res) => deleteProfile(req, res, pool))

app.listen(3000,() => {
    console.log("Server is running on port 3000");
})
