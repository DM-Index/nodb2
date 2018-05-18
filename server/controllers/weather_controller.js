const axios = require("axios");
const { API_KEY } = process.env.API_KEY;
//This is where we store API response data.
const weather = [];
console.log(weather);
// We'll assign an ID to each entry into the array
let id = 0;

module.exports = {
  read: (req, res) => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Dallas&type=accurate&APPID=0ee7c0a760947bbbbf1ed51ba8118579"
      )
      .then(response => {
        console.log(response);
        return (response.data = weather);
      })
      .catch(error => {
        console.log("Error", error);
      });
  },
  getData: (req, res) => {
    console.log("getData");
    const { search } = req.params;
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Dallas&type=accurate&APPID=0ee7c0a760947bbbbf1ed51ba8118579"
      )
      .then(response => {
        // ^ I should probably be using map, right?
        res
          .status(200)
          .json()
          // ^ REFERENCE ERROR here: JSON is not defined
          .catch(error => {
            // ^ UNHANDLED PROMISE REJECTION TypeError: res.status(...).json(...).catch is not a function
            console.log("Error", error);
          });
      });
  }
};
