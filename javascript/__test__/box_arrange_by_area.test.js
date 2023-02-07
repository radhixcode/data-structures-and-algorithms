const box = require("../box_arrange_by_area");

describe("Bubble sort test", () => {
  test("1. Input list have 2 dimenstions", () => {
    expect(
      box.numberOfWays([[2, 2], [2, 3]])).toStrictEqual([5, 8]);
  });
  test("2. Input list include 1 dimenstion", () => {
    expect(box.numberOfWays([[2], [1, 3]])).toStrictEqual([2, 3]);
  });
  test("3. Input list include empty dimenstion", () => {
    expect(box.numberOfWays([[], [1, 3]])).toStrictEqual([undefined, 3]);
  });
});
