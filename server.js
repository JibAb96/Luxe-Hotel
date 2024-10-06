import express from "express";
import cors from "cors";
import pkg from "body-parser";
import bcrypt from "bcrypt";
import pg from "pg";
import handleRegistration from "./controllers/register.js";
import handleSignIn from "./controllers/signin.js";
import deleteProfile from "./controllers/deleteProfile.js"
import updateProfile from "./controllers/updateProfile.js"
import booking from "./controllers/booking.js";
import reservations from "./controllers/reservations.js";
import editBooking from "./controllers/editBooking.js";
import deleteBooking from "./controllers/deleteBooking.js";


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

app.get("/reservations/:id", (req, res) => reservations(req, res, pool))

app.post("/register", (req, res) => handleRegistration(req, res, pool, bcrypt));

app.post("/signin", (req, res) =>  handleSignIn(req, res, pool, bcrypt));

app.post("/book/:id", (req, res) => booking(req, res, pool));

app.put("/update-profile/:id", (req, res) => updateProfile(req, res, pool));

app.put("/edit-booking/:id", (req, res) => editBooking(req, res, pool))

app.delete("/delete-profile/:id", (req, res) => deleteProfile(req, res, pool));

app.delete("/delete-booking/:id", (req, res) => deleteBooking(req, res, pool))

app.listen(3000,() => { console.log("Server is running on port 3000"); })
