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
    let json = JSON.parse(body);

    console.log(json);

    let sunriseUtc = new Date(json.results.sunrise);
    let sunsetUtc = new Date(json.results.sunset);

    $(`#sunrise`).text('Sunrise: ' + sunriseUtc.toLocaleTimeString());
    $(`#sunset`).text('Sunset: ' + sunsetUtc.toLocaleTimeString());
  });
}