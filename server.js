// Import Dependencies
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

// Create our app object
const app = express();

// set up middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world')
})

//turn on the server listener
app.listen(PORT, () => console.log(`Listening on ${PORT} `))
