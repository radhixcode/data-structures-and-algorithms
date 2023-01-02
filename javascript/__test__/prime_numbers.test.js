const prime = require("../prime_numbers");

describe("Prime number Test", () => {
  test("1. Count of prime number less than 10 is 4", () => {
    expect(prime.countPrimes(10)).toEqual(4);
  });
});
