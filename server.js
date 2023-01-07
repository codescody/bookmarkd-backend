// Import Dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Create our app object
const app = express();

// set up middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world')
})

// Database connection logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

//turn on the server listener
app.listen(PORT, () => console.log(`Listening on ${PORT} `))
