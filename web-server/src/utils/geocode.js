const request = require("request");
const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.API_KEY;

const baseURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

const geocode = async (address) => {
  const url = baseURL + address + "&key=" + apiKey;
  try {
    const response = await axios.get(url);
    const { lat, lng } = response.data.results[0].geometry.location;
    console.log(lat, lng);
    return { lat, lng };
  } catch (error) {
    return { lat: null, lng: null };
  }
};

module.exports = geocode;
