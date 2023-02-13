const frequent = require("../top_k_frequent_letters");

describe("Top frequent key words Test", () => {
  test("1. Top 5 frequent words in cjeggejbcqqbqwert", () => {
    expect(frequent.topKFrequent("cjeggejbcqqbqwert", 5)).toStrictEqual([ 'e', 'q', 'b', 'c', 'g' ]);
  });
  test("2. Top 4 frequent words in vewrvwevwevyyuu", () => {
    expect(frequent.topKFrequent("vewrvwevwevyyuu", 4)).toStrictEqual([ 'v', 'e', 'w', 'u' ]);
  });
  test("3. Top 3 frequent words in cjeggejbcqqbqwert", () => {
    expect(frequent.topKFrequent("zzzvvvmmmfffaaa", 3)).toStrictEqual([ 'a', 'f', 'm' ]);
  });
});
