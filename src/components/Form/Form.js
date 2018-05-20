import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  // Tracks typing changes
  //! This currently sends logs empty proxy o
  handleChange(val) {
    console.log(val);
    //! ^ This is still tracking empty objects
    val.preventDefault();
    this.setState({ search: val });
    // val.preventDefault();
  }
  // Sets value of Search = Results.
  onSubmitHandler(props) {
    this.setState({ results: this.props.search });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          placeholder="Search City Here..."
          onChange={val => this.handleChange(val)}
        />
        <button onSubmit={() => this.props.getWeather(this.state.search)} />
      </div>
    );
  }
}

// render() {
//   console.log(this.props);
//   return (
//     <div className="form">
//       <input
//         placeholder="Search City Here..."
//         onChange={val => this.handleChange(val)}
//       />
//       <button onSubmit={() => this.props.getWeather(this.state.search)} />
//     </div>
//   );
// }
// }

// <button onSubmit={() => this.props.getWeather(this.state.search)} />
