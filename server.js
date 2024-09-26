import express from "express";
import cors from "cors";
import pkg from "body-parser";
import knex from "knex";
import bcrypt from "bcrypt";

const app = express();

app.use(cors());

const { json } = pkg;

app.use(json());

app.get("/", (req, res) => { res.send("Hello World") });

app.listen(3000,() => {
    console.log("Server is running on port 3000");
})
  
