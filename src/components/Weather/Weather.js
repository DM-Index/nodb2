import React from "react";
// This function exports directly into the App Render Method. Everything on this page seems functional.
const Weather = props => {
  console.log(props);
  return (
    <div className="weather__info">
      <p>City: {props.city}</p>
      <p>Temp: {props.temp}</p>
      <p>Humidity: {props.humidity}</p>
      <p>Country: {props.country}</p>
      <p>Description: {props.description}</p>
      <p>Error: {props.error}</p>
    </div>
  );
};

export default Weather;
