import React, { Component } from "react";

import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather.js";
import Titles from "./components/Titles/Titles.js";

import axios from "axios";

import "./App.css";
const API_KEY = process.env.API_KEY;

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

  // updateWeatherLocation(event) {
  //   this.setState({ location: event.target.value });
  // }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div id="header-container" />
          <Titles className="titles" />

          <Form className="form" getWeather={this.getWeather} />

          <Weather />
        </div>
        <div>
          <h1 className="about">About</h1>
          <p>This is a simple weather app that utilizes a single get.</p>
          <p>
            In this app i make a single axios get call that currently feeds to a
            get endpoint
          </p>
          <p>
            The API can be found at{" "}
            <a href="www.openweathermap.com" rel="api">
              www.openweathermap.com/api{" "}
            </a>
          </p>
        </div>
        <div className="footer" display="horizontal" />
      </div>
    );
  }
}

export default App;
