import React from "react";
// What do i do with this? Props can't move from a child to parent so how is this information getting out?
const Weather = props => {
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
