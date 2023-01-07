const set = require("../subsets");

describe("Subset Test", () => {
  test("1. Subset array of non repeating elements", () => {
    expect(set.subsets([1, 2, 3])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]);
  });
});
