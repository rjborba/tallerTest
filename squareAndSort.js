const squareAndSortArray = (array) =>
  array.map((item) => Math.pow(item, 2)).sort((a, b) => a - b);

module.exports = squareAndSortArray;
