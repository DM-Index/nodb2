import React from "react";
import "./Weather.css";
// This function exports directly into the App Render Method. Everything on this page seems functional.
const Weather = props => {
  console.log(props);
  return (
    <ul id="weather__info">
      <li>City: {props.city}</li>
      <li>Temp: {props.temp}</li>
      <li>Humidity: {props.humidity}</li>
      <li>Country: {props.country}</li>
      <li>Description: {props.description}</li>
    </ul>
  );
};

export default Weather;
