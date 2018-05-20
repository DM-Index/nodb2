const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const mc = require("./controllers/controller");
// App/Server Declaration
const app = express();

const port = 3001;
// Top-level Middleware
app.use(json());
app.use(cors());
// Controller Methods
// Get initial data
app.get("/api/weather", mc.getWeather);
//! ----^ CB function is not working, logging as an anon obj----

// Init's server and opens up requests and responses to server
app.listen(port, () => console.log(`Now Listening To Port:${port}FM`));
