const axios = require("axios");
//This is where we store API response data.
const url = "http://api.openweathermap.org/data/2.5/weather?q";
const apd = "0ee7c0a760947bbbbf1ed51ba8118579";
const getWeather = (req, res) => {
  axios
    .get(`${url}=Dallas&type=accurate&APPID=${apd}`)
    .then(response => {
      res.status(200).json(response.data);
      console.log(response);
    })
    .catch(error => {
      console.log(error && "Get Weather Failure");
    });
};

module.exports = {
  getWeather
};

// getWeather = param => {
//   axios
//     .get(`/data/weather/${param}`)
//     .then(response => {
//       console.log(response);
//       //! ^ is logging but what do i do with the data?
//     })
//     .catch(error => {
//       console.log("Error", error);
//     });
// };

// module.exports = {
//   read: (req, res) => {
//     axios
//       .get(
//         "http://api.openweathermap.org/data/2.5/weather?q=Dallas&type=accurate&appid=0ee7c0a760947bbbbf1ed51ba8118579"
//       )
//       .then(response => {
//         console.log(response);
//         // return (response.data = weather);
//         res.status(200).json(response.data);
//         // ^ REQ.BODY
//       })
//       .catch(error => {
//         console.log("Error", error);
//       });
//   }
// getData: (req, res) => {
//   console.log("getData");
//   const { search } = req.params;
//   axios
//     .get(
//       "http://api.openweathermap.org/data/2.5/weather?q=Dallas&type=accurate&APPID=0ee7c0a760947bbbbf1ed51ba8118579"
//     )
//     .then(response => {
//       res
//         .status(200)
//         .json(response)
//         .catch(error => {
//           console.log("Error", error);
//         });
//     });
// }
