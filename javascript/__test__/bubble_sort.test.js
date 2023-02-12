const sort = require("../bubble_sort");

describe("Bubble sort Test", () => {
  test("1. bubble sort empty array", () => {
    try {
      sort.bubbleSort([2]);
    } catch (e) {
      expect(e.message).toBe("error: input is not an array");
    }
  });
  test("2. bubble sort single item array", () => {
    expect(sort.bubbleSort([2])).toStrictEqual([2]);
  });
  test("3. bubble sort", () => {
    expect(sort.bubbleSort([6, 5, 3, 2, 1, 8])).toStrictEqual([
      1, 2, 3, 5, 6, 8,
    ]);
  });
  test("4. bubble sort efficient", () => {
    expect(sort.bubbleSortEff([6, 5, 3, 2, 1, 8])).toStrictEqual([
      1, 2, 3, 5, 6, 8,
    ]);
  });
});
