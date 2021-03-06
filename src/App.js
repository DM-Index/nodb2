import React, { Component } from "react";
// Import Components Here Below
import Container from "./components/Container/Container";
import Titles from "./components/Titles/Titles";
import Form from "./components/Form/Form";
import Copyright from "./components/Copyright/Copyright";
import Footer from "./components/Footer/Footer";
// Importing axios as HTTP client
// App.css contains a basic reset.css: Rest of styling is with relevant components.
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    //The are properties we want from the api, default state is empty array that is populated with response.data
    //State changes come in from <Form /> Component
    this.state = {};
  }

  // http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`

  render() {
    return (
      <div className="App">
        <Container />
        <Footer />
        <Titles />
        <Footer />
        <Form />
        <Copyright />
      </div>
    );
  }
}
export default App;
