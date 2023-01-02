const sortByChar = require("../sort_characters_by_frequency");

describe("Sort characters by frequency Test", () => {
  test("1. Frequency sorted string of 'localslot' is 'llloocast'", () => {
    expect(sortByChar.frequencySort("localslot")).toEqual("llloocast");
  });
});
