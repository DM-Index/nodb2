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

  getWeather = query => {
    axios
      .get(`/api/getWeather/${query}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  updateWeatherLocation(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div id="header-container" />
        <Titles className="titles" />

        <Form className="form" getWeather={this.getWeather} />
        <Weather />

        <div className="footer" display="horizontal" />
      </div>
    );
  }
}

export default App;
