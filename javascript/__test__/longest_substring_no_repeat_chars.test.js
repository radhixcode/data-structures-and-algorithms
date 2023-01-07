const subStr = require("../longest_substring_no_repeat_chars");

describe("Longest substring test", () => {
  test("1. Length of the longest substring of abcbcdef is 5", () => {
    expect(subStr.lengthOfLongestSubstring("abcbcdef")).toEqual(5);
  });
});
