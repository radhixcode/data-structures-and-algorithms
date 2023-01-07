const anagram = require("../valid_anagram");

describe("Valid anagram test", () => {
  test("1. 'anagram', 'nagaram' are anagram ", () => {
    expect(anagram.isAnagram("anagram", "nagaram")).toBeTruthy();
  });
  test("2. 'anagrami', 'nagaramj' are not anagram ", () => {
    expect(anagram.isAnagram("anagrami", "nagaramj")).toBeFalsy();
  });
});
