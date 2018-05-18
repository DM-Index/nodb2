import React, { Component } from "react";
// Import Components Here Below
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Titles from "./components/Titles/Titles";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";
import Footer from "./components/Footer/Footer";
// Importing axios as HTTP client
import axios from "axios";
// App.css contains a basic reset.css: Rest of styling is with relevant components.
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    //The are properties we want from the api, default state is empty array that is populated with response.data
    //State changes come in from <Form /> Component
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
  //! Persistent error on line #34
  // This takes the response from our input and sends the search results for city to our server
  //! Error =  Empty Response
  getWeather = param => {
    axios
      .get(`/data/weather/${param}`)
      .then(response => {
        console.log(response);
        //! ^ is logging but what do i do with the data?
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  // Components rendered top-down in parent div.
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        <Titles />
        <Form />
        <Weather />
        <Footer />
      </div>
    );
  }
}
export default App;
