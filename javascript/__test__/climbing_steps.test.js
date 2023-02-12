const climb = require("../climbing_steps");

describe("Climbing steps Test", () => {
  test("1. Input is 3", () => {
    expect(climb.climbStairs(3)).toEqual(3);
  });
  test("2. Input is 2", () => {
    expect(climb.climbStairs(2)).toEqual(2);
  });
  test("3. Input is 7", () => {
    expect(climb.climbStairs(7)).toEqual(21);
  });
});
