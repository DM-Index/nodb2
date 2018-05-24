import React from "react";
import "./Weather.css";

const Weather = response => {
  console.log(response);
  return (
    <ul id="weather__info">
      <li>City: {response.name}</li>
      <li>Temp: {response.temp}</li>
      <li>Humidity: {response.humidity}</li>
      <li>Country: {response.country}</li>
    </ul>
  );
};

export default Weather;
