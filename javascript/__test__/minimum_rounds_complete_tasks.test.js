const task = require("../minimum_rounds_complete_tasks");

describe("Minimum round for task Test", () => {
  test("1. Retun minium round", () => {
    expect(task.minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4])).toStrictEqual(4);
  });
  test("2. Not possible to complete", () => {
    expect(task.minimumRounds([2, 3, 3])).toStrictEqual(-1);
  });
});
