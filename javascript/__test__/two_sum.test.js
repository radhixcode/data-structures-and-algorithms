const arraySum = require("../two_sum");

describe("Two sum test", () => {
  test("1. two sum empty array", () => {
    try {
      arraySum.twoSum([], 9);
    } catch (e) {
      console.log(e.message);
      expect(e.message).toBe("error: input array error");
    }
  });
  test("2. Two sum ", () => {
    expect(arraySum.twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
  test("3. Two sum efficient", () => {
    expect(arraySum.twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
});
