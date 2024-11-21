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
import resetPassword from "./controllers/resetPassword.js";
import forgotPassword from "./controllers/forgotPassword.js";
import confirmBookings from "./controllers/confirmBooking.js";
import handleAuthStatus from "./controllers/authentication.js";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
});

const app = express();

app.use(cors());

app.use(express.json());

const { json } = pkg;

app.use(json());

app.get("/", (req, res) => { res.send("success") });
app.get("/confirm-booking/:id", (req, res) => confirmBookings(req, res, pool));
app.get("/reservations/:id", (req, res) => reservations(req, res, pool));

app.post("/register", (req, res) => handleRegistration(req, res, pool, bcrypt));
app.post("/signin", (req, res) =>  handleSignIn(req, res, pool, bcrypt));
app.post("/book/:id", (req, res) => booking(req, res, pool));
app.post("/forgot-password", (req, res) => forgotPassword(req, res, pool));
app.post("/auth/status", (req, res) => handleAuthStatus(req, res, pool))

app.put("/update-profile/:id", (req, res) => updateProfile(req, res, pool));
app.put("/edit-booking/:id", (req, res) => editBooking(req, res, pool));
app.put("/reset-password/:id", (req, res) => resetPassword(req, res, pool, bcrypt));

app.delete("/delete-profile/:id", (req, res) => deleteProfile(req, res, pool));
app.delete("/delete-booking/:id", (req, res) => deleteBooking(req, res, pool));

const PORT = process.env.PORT || 3001
app.listen( PORT ,() => { console.log(`Server is running on port ${PORT}`); })

 