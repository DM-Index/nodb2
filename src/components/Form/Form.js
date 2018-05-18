import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Tracks typing changes
  handleChange(e) {
    console.log(e);
    // ^ This is still tracking empty objects
    this.setState({ search: e.target.value });
  }
  // Sets value of Search = Results.
  handleSubmit(props) {
    console.log(this.props);
    this.setState({ results: this.props.search });
    props.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <div className="form">
        <input
          placeholder="Search City Here..."
          onChange={e => this.handleChange(e)}
        />
        <button
          onClick={() => this.props.getWeather(this.state.search)}
          id="form-button"
        >
          Get Weather
        </button>
      </div>
    );
  }
}
