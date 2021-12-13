const dataFile = require("./data.js");
const sumOfArray = require("./sum.js");

console.log(sumOfArray(dataFile.numbers));
console.log(dataFile.numbers);
console.log(dataFile.string, dataFile.homeTown);

const lodash = require("lodash");
console.log(lodash.shuffle(dataFile.numbers));