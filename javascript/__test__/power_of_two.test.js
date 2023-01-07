const power = require("../power_of_two");

describe("Power of two Test", () => {
  test("1. Nearest power 2 of 17  is 16", () => {
    expect(power.powerOfTwo(17)).toEqual(16);
  });
  test("2. Nearest power 2 of 4100  is 4096", () => {
    expect(power.powerOfTwo(4100)).toEqual(4096);
  });
});
