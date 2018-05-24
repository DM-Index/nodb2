const axios = require("axios");

let resObj = [];

const getWeather = (req, res) => {
  res.status(200).json(resObj);
};

const postWeather = (req, res, next) => {
  resObj.push(req.body.q);
  res.status(200).json(resObj);
  next();
};

module.exports = {
  getWeather,
  postWeather
};
