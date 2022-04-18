const { it } = require("@jest/globals");
const squareAndSortArray = require("./squareAndSort.js");
const smallerSum = require("./smallerSum.js");

// 5, 7, 1, 1, 2, 3, 22
describe("1) Smaller sum", () => {
  fit("Test case 1", () => {
    expect(smallerSum([5, 7, 1, 1, 2, 3, 22])).toBe(20);
  });

  //   it("Test case 2", () => {
  //     expect(squareAndSortArray([-2, -1])).toEqual([1, 4]);
  //   });
});

describe("2) Squared and asc sorted array", () => {
  it("Test case 1", () => {
    expect(squareAndSortArray([1, 2, 3, 5, 6, 8, 9])).toEqual([
      1, 4, 9, 25, 36, 64, 81,
    ]);
  });

  it("Test case 2", () => {
    expect(squareAndSortArray([-2, -1])).toEqual([1, 4]);
  });
});
