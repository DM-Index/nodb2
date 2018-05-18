import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
    this.updateChange = this.updateChange.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  // Tracks typing changes
  // This currently sends logs empty proxy o
  updateChange(e) {
    console.log(e);
    // ^ This is still tracking empty objects
    this.setState({ search: e.target.value });
  }
  // Sets value of Search = Results.
  onClickHandler(props) {
    this.setState({ results: this.props.search });
  }

  render() {
    return (
      <div className="form">
        <input
          placeholder="Search City Here..."
          onChange={e => this.updateChange(e)}
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
