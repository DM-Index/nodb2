// As far as structure goes, our server folder should be in the root directory
// index.js should be inside server
// and we should run nodemon from the root by running nodemon server/index.js or nodemon server/
// get used to this because when we get into databases it'll important that we start the server from the root directory.
const express = require("express");
const { json } = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const { API_KEY } = process.env.API_KEY;

// App/Server Declaration
const app = express();
// Make sure to start your node server (nodemon) first and your react server second (yarn start || npm start).
// This should be 3001 or higher because our -->
// React Development server that runs with yarn start will run on port 3000
const port = 3001;

// Top-level Middleware
app.use(json());
app.use(cors());
// Controller Methods
const { getData } = require(`${__dirname}/controllers/weather_controller`);

// Get initial State
app.get("/data/weather/:search", getData);
// ^ CB function is not working, logging as an anon obj

// Init's server and opens up requests and responses to server
app.listen(port, () => console.log(`Now Listening To Port:${port}FM`));
