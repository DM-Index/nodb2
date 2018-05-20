const { json } = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const mc = require("./controllers/weather_controller");
// App/Server Declaration
const app = express();

const port = 3001;
// Top-level Middleware
app.use(json());
app.use(cors());
// Controller Methods
// Get initial data
app.get("/api/data/weather/:search", mc.read);
//! ----^ CB function is not working, logging as an anon obj----

// Init's server and opens up requests and responses to server
app.listen(port, () => console.log(`Now Listening To Port:${port}FM`));
