const smallerSum = (array) => {
  array.sort((a, b) => a - b);
  console.log(array);

  let all = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      all.push(array[i] + array[j]);
    }
  }
  console.log(all);

  // smallerSum(all.sort((a, b) => a - b));

  console.log(all.sort((a, b) => a - b));
};

module.exports = smallerSum;
