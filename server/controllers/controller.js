const axios = require("axios");

// http://api.openweathermap.org/data/2.5/forecast?q=dallas,tx,1&appid=0ee7c0a760947bbbbf1ed51ba8118579
axios
  .get(
    `http://api.openweathermap.org/data/2.5/forecast?q=dallas,tx,1&appid=0ee7c0a760947bbbbf1ed51ba8118579`
  )
  .then(response => {
    console.log(response, "ResObj");
    resObj = response;
  })
  .catch(error => {
    console.log(error, "getWeather Failure");
  });

const getWeather = (req, res) => {
  res.status(200).json(resObj);
};

const postWeather = (req, res, next) => {
  const { weather, data } = req.body;
  responseObj.push;
  console.log(req.body);
};

module.exports = {
  getWeather,
  postWeather
};
