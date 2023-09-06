// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/" +
//     latitude +
//     "," +
//     longitude;

//   request({ url, json: true }, (error, { body }) => {
//     if (error) {
//       callback("Unable to connect to weather service!", undefined);
//     } else if (body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       callback(
//         undefined,
//         body.daily.data[0].summary +
//           " It is currently " +
//           body.currently.temperature +
//           " degress out. There is a " +
//           body.currently.precipProbability +
//           "% chance of rain."
//       );
//     }
//   });
// };

// module.exports = forecast;

const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D",
//   params: {
//     units: "auto",
//     lang: "en",
//   },
//   headers: {
//     "X-RapidAPI-Key": "b6553eba50msh03aa29504102c69p169d30jsn2f10778d717c",
//     "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
//   },
// };

const forecast = async ({ lat, lng }) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: `https://dark-sky.p.rapidapi.com/${lat},${lng}`,
      params: {
        units: "auto",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": "b6553eba50msh03aa29504102c69p169d30jsn2f10778d717c",
        "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = forecast;
