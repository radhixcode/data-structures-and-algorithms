const sortByChar = require("../sort_characters_by_frequency");

describe("Sort characters by frequency Test", () => {
  test("1. sort characters by frequency", () => {
    expect(sortByChar.frequencySort("localslot")).toEqual("llloocast");
  });
});
