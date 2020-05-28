const fs = require('fs');
const path = require('path');

module.exports = {
  "contribution": JSON.parse(fs.readFileSync(path.join(__dirname, 'schemas', 'contribution.json'))),
  "contributor": JSON.parse(fs.readFileSync(path.join(__dirname, 'schemas', 'contributor.json'))),
  "expense": JSON.parse(fs.readFileSync(path.join(__dirname, 'schemas', 'expense.json')))
};
