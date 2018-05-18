const axios = require("axios");
//This is where we store response data.
let weather = [];
// We'll assign an ID to each entry into the array
let id = 0;
const URL = `api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${API_KEY}&cnt=5`;

const getWeather = (req, res, next) => {
  if 
}

module.exports = {
  read: (req, res) => {
    res.status(200).send(weather);
  },
  create: (req, res) => {}
};

axios
  .get(URL)
  .then(response => {
    response.weather = response;
    console.log(weather);
  })
  .catch(err => console.log);
//access api here

// app.get("/api/getWeather/:city", function(req, res) {
//   console.log(req.params.city);
//   axios
//     .get(
//       `api.openweathermap.org/data/2.5/weather?q=${
//         req.params.city
//       }&APPID=0ee7c0a760947bbbbf1ed51ba8118579`
//     )
//     .then(resp => {
//       res.status(200).json(resp);
//       console.log(resp);
//     })
//     .catch(err => console.log(err));
//   res.send(req.params).json();
// });
