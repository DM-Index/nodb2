import React, { Component } from "react";
import axios from "axios";
import Weather from "../Weather/Weather";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      search: "",
      responseObj: {}
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  handleInput(val) {
    console.log(val);
    this.setState({ input: val });
  }
  handleSearch() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?q=dallas,tx,1&appid=0ee7c0a760947bbbbf1ed51ba8118579"
      )
      .then(res => {
        console.log(res, "HandleSearch Response");
        this.setState({
          responseObj: res
        });
      })
      .catch(error => {
        console.log(error, "handleSearch Error");
      });
  }
  handlePost() {
    axios
      .post("/api/sendWeather", {
        q: "dallas"
      })
      .then(res => {
        console.log(res, "HandlePost Response");
        this.setState({
          responseObj: res
        });
      })
      .catch(error => {
        console.log(error, "handlePost Error");
      });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search City Here..."
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={() => this.handleSearch()}> Search </button>
        <input
          placeholder="Post"
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={() => this.handlePost()}> Post </button>
        <Weather>{this.state.responseObj}</Weather>
      </div>
    );
  }
}
// send obj data from front to the back declare objData then json it back to the front
