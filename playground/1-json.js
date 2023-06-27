const fs = require("fs");

const buffer = fs.readFileSync("1-json.json");
const dataJson = buffer.toString();
const data = JSON.parse(dataJson);

// update the data
data.name = "Diep";
data.age = "24";

// write the data
fs.writeFileSync("1-json.json", JSON.stringify(data));
