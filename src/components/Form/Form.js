import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
    this.updateChange = this.updateChange.bind(this);
  }

  updateChange(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div className="form">
        <input
          className="form-input"
          type="text"
          name="Query"
          placeholder="Search Here..."
          onChange={this.updateChange}
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
