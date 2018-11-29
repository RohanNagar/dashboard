const util = require('util');
const config = require("./config.json");

const url = util.format(
  "https://api.sunrise-sunset.org/json?lat=%s&lng=%s&date=today",
  config.sunrise-sunset.latitude,
  config.sunrise-sunset.longitude);

