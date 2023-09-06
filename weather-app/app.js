const weatherForecasts = [
  "Expect partly cloudy skies with a high of 72°F and a low of 58°F. There may be a chance of scattered showers in the afternoon.",
  "Sunny weather prevails with a high temperature of 80°F and a low of 65°F. No precipitation is expected.",
  "Showers are likely throughout the day with a high of 68°F and a low of 55°F. Keep your umbrella handy.",
  "Enjoy clear skies and warm weather with a high of 86°F and a low of 72°F. Perfect beach day!",
  "Partly cloudy conditions with a high of 78°F and a low of 63°F. No rain expected.",
  "Foggy and cool with a high temperature of 65°F and a low of 55°F. Visibility may be limited in the morning.",
  "Rainy day ahead with a high of 62°F and a low of 50°F. Grab your raincoat and stay dry.",
  "Expect clear skies and pleasant weather with a high of 70°F and a low of 52°F. Great for outdoor activities.",
  "Partly cloudy skies with a high temperature of 74°F and a low of 60°F. Comfortable weather for a day out.",
  "Sunny and hot conditions with a high of 90°F and a low of 75°F. Stay hydrated and wear sunscreen.",
  // Add more forecasts as needed
];

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  if (!req.query.lat || !req.query.lng)
    res.send({
      error: "Invalid query, you must provide a lat and lng",
    });
  res.send({
    error: null,
    forecast: weatherForecasts[Math.floor(Math.random() * 9)],
  });
});

app.listen(3005, () => {
  console.log("Server is up on port 3005");
});
