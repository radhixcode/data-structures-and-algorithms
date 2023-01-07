const uniqChar = require("../first_unique_character_in_a_string");

describe("First unique character in a string Test", () => {
  test("1. First unique character  hash map", () => {
    expect(uniqChar.firstUniqChar("leetcode")).toEqual(0);
  });
  test("2. First unique character index methods", () => {
    expect(uniqChar.firstUniqCharEff("leetcode")).toEqual(0);
  });
});
