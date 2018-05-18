import React, { Component } from "react";
// Import Components Here
import Titles from "./components/Titles/Titles.js";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather.js";
// Importing axios for as HTTP client
import axios from "axios";
// Main Style Folder
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: [],
      temp: [],
      city: [],
      humidity: [],
      description: [],
      error: [],
      location: []
    };
    this.getWeather = this.getWeather.bind(this);
  }
  // Persistent error on line #34
  // This takes the response from our input and sends the search results for city to our server
  // Err =  Empty Response
  getWeather = param => {
    axios
      .get(`/data/weather/${param}`)
      .then(response => {
        console.log(response);
      })
      // ^ REQUEST FAILED WITH 404. This has been a consistent error.
      .catch(error => {
        console.log("Error", error);
        // ^ Failed to load resource: SERVER ERROR CODE 500(Internal Server Error)
      });
  };

  //Render Weather Response In Div
  render() {
    return (
      <div className="App">
        <div id="container" />
        <Titles className="titles" />
        <Form className="form" getWeather={() => this.getWeather()} />
        <Weather />
        <div className="footer" display="horizontal" />
      </div>
    );
  }
}

export default App;
