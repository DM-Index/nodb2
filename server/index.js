const express = require("express");
const { json } = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
//const URL = `api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${API_KEY}`;

const app = express();
const port = 3001;

app.use(json());
app.use(cors());
// app.use(express.static(__dirname + "/../public/build"));

app.get("/api/getWeather/:city", function(req, res) {
  console.log(req.params.city);
  axios
    .get(
      `api.openweathermap.org/data/2.5/weather?q=${
        req.params.city
      }&APPID=0ee7c0a760947bbbbf1ed51ba8118579`
    )
    .then(resp => {
      res.status(200).json(resp);
      console.log(resp);
    })
    .catch(err => console.log(err));
  //res.send(req.params).json();
});

// app.post("/api/getWeather", function(req, res) {
//   console.log(req.body);
// });
// //app.post data
//req.body is the object app.post is responding to
//app.put update data

//app.delete data

app.listen(port, () => console.log(`Now Listening To Port:${port}FM`));
