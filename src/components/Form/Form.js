import React, { Component } from "react";
import axios from "axios";

const url = "http://api.openweathermap.org/data/2.5/weather?q=$";
const apd = "0ee7c0a760947bbbbf1ed51ba8118579";

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
  }
  handleInput(val) {
    console.log(val);
    this.setState({ input: val });
  }
  handleSearch() {
    axios
      .get(
        `${url}${(this.state.input,
        console(
          this.state.input
        ))}&type=accurate&APPID=0ee7c0a760947bbbbf1ed51ba8118579`
      )
      .then(response => {
        this.setState({
          responseObj: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div action={() => this.handleSearch()}>
        <input
          placeholder="Search City Here..."
          onChange={e => this.handleInput(e.target.value)}
        />
      </div>
    );
  }
}
