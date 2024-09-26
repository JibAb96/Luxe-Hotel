import express from "express";
import cors from "cors";
import pkg from "body-parser";
import knex from "knex";
import bcrypt from "bcrypt";
import handleRegistration from "./controllers/handleRegistration";
import handleSignIn from "./controllers/handleSignIn";
import { Pool } from "pg";

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

app.post("/register", handleRegistration(db, bcrypt));

app.post("/signin", handleSignIn(db, bcrypt));

app.listen(3000,() => {
    console.log("Server is running on port 3000");
})
