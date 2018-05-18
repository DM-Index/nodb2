let weather = [];

let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(weather);
  },
  create: (req, res) => {}
};
