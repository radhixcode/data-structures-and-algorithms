const weath_api = require("../weather_rest_api");

describe("Weather API test", () => {
  test("1. All staions ", () => {
    weath_api.weatherStation("all").then(function (result) {
      expect(result).toStrictEqual([
        'Aberdeen 36 31 66',
        'Abu Dhabi 3 4 9',
        'Adelaide 15 8 61',
        'Aizuwakamatsu 27 35 2',
        'Altay City 12 25 5',
        'Alwar 15 1 5',
        'Amadora 5 8 48',
        'Amarah 20 23 17',
        'Amravati 36 27 74',
        'Amsterdam 33 6 11'
      ]);
    });
  });
  test("2. Station like 'aha' ", () => {
    weath_api.weatherStation("aha").then(function (result) {
      expect(result).toStrictEqual([ 'Bahawalpur 16 13 36', 'Baharampur 23 11 35' ]);
    });
  });
});
