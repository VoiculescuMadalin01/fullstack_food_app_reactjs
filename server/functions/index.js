const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccountKey = require("./serviceAccountKey.json");

const express = require("express");
const app = express();

// Body parser for JSON  data
app.use(express.json());

//cross origin

const cors = require("cors");
app.use(
    cors({
        origin: true,
    })
);
app.use((req, res, next) => {
    res.set("Access-Control-Allow_Origin", "*");
    next();
});

//firebase credentials

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
});

app.get("/", (req, res) => {
    return res.send("muie dinu");
});

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);

exports.app = onRequest(app);
