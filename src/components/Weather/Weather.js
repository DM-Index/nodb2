import React from "react";

const Weather = props => (
  <div className="weather__info">
    <p>{props.city}</p>
    <p>{props.temp}</p>
    <p>{props.humidity}</p>
    <p>{props.country}</p>
    <p>{props.description}</p>
    <p>{props.error}</p>
  </div>
);

export default Weather;

// className="weather"
// temperature={this.state.temperature}
// humidity={this.state.humidity}
// city={this.state.city}
// country={this.state.country}
// description={this.state.description}
// error={this.state.error}

// const Weather = props => (
//   <div className="weather__info">
//     {props.city &&
//       props.country && (
//         <p className="weather__key">
//           {" "}
//           Location:
//           <span className="weather__value">
//             {" "}
//             {props.city}, {props.country}
//           </span>
//         </p>
//       )}
//     {props.temperature && (
//       <p className="weather__key">
//         {" "}
//         Temperature:
//         <span className="weather__value"> {props.temperature} </span>
//       </p>
//     )}
//     {props.humidity && (
//       <p className="weather__key">
//         {" "}
//         Humidity:
//         <span className="weather__value"> {props.humidity} </span>
//       </p>
//     )}
//     {props.description && (
//       <p className="weather__key">
//         {" "}
//         Conditions:
//         <span className="weather__value"> {props.description} </span>
//       </p>
//     )}
//     {props.error && <p className="weather__error">{props.error}</p>}
//   </div>
// );
