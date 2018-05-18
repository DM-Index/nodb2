import React, { Component } from "react";

import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather.js";
import Titles from "./components/Titles/Titles.js";

import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();

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
  getWeather = param => {
    axios
      .get(`/data/2.5/Weather/${param}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  render() {
    return (
      <div className="App">
        <div id="container" />
        <Titles className="titles" />

        <Form className="form" getWeather={this.getWeather} />
        <Weather>{Weather}</Weather>

        <div className="footer" display="horizontal" />
      </div>
    );
  }
}

export default App;
