const roman = require("../roman_to_integers");

describe("Roman to integers Test", () => {
  test("1. LVIII is  58", () => {
    expect(roman.romanToInt("LVIII")).toStrictEqual(58);
  });
  test("2. MCMXCIV is 1994", () => {
    expect(roman.romanToInt("MCMXCIV")).toStrictEqual(1994);
  });
});
