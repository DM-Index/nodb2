const express = require("express");
const { json } = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const { API_KEY } = process.env.API_KEY;
const URL = `api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${API_KEY}&cnt=5`;

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

// Get initial State
app.get("/api/get", getData);

app.listen(port, () => console.log(`Now Listening To Port:${port}FM`));
