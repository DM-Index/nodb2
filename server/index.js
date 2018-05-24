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
// this is called an event emitter
app.get("/api/weather", mc.getWeather);
app.get("/api/weather/:city", function(req, res, next) {
  req.params.city;
  next();
});

app.post("/", function(req, res, next) {
  console.log(req.body);
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},tx,1&appid=0ee7c0a760947bbbbf1ed51ba8118579`;
  next();
});

// Init's server and opens up requests and responses to server
app.listen(port, () => console.log(`Now Listening To Port:${port}FM`));
