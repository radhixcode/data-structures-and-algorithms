const paranth = require("../valid_parantheses");

describe("Valid parantheses Test", () => {
  test("1. Input valid parantheses {{[]()}}()", () => {
    expect(paranth.isValidPara("{{[]()}}()")).toBeTruthy();
  });
  test("2. Input invalid parantheses {{[])}}()", () => {
    expect(paranth.isValidPara("{{[])}}()")).toBeFalsy();
  });
});

