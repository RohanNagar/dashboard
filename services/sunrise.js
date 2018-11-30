const util = require('util');
const request = require("request");

const url = util.format(
  "https://api.sunrise-sunset.org/json?lat=%s&lng=%s&date=today&formatted=0",
  config.sunrise.latitude,
  config.sunrise.longitude);

(() => {
  update();
})();

async function update() {
  request.get(url, (error, response, body) => {
    let data = JSON.parse(body).results;

    let sunrise = new Date(data.sunrise);
    let sunset = new Date(data.sunset);

    $(`#sunrise`).text('Sunrise: ' + sunrise.toLocaleTimeString());
    $(`#sunset`).text('Sunset: ' + sunset.toLocaleTimeString());
  });
}