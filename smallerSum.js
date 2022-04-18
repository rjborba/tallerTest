const smallerSum = (array) => {
  array.sort((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > total + 1) {
      return total + 1;
    }

    total += array[i];
  }

  // If not gep were found, we return the max sum + 1
  return total + 1;
};

module.exports = smallerSum;
