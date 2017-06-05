const fs = require('fs');
const path = require('path');

let collection = {};
let schemas = [
  "contributor",
  "contribution"
];

schemas.forEach((schema) => {
  let filePath = path.join(__dirname, 'schemas', `${schema}.json`);
  collection[schema] = JSON.parse(fs.readFileSync(filePath));
});

module.exports = collection;
