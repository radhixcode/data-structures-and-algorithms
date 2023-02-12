const request = require("request");

/**
 * @param {String} keyword - url string
 * @returns {Array} finalData - Array  od user data
 */
const weatherStation = async (keyword) => {
  let userData = [];
  const word = keyword === "all" ? "" : keyword;
  const weatherURL = "https://jsonmock.hackerrank.com/api/weather/search?name=" + word;

  const result = await new Promise((resolve, reject) => {
    request(weatherURL, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        reject(null);
      }
    });
  });

  for (let i = 0; i < result.data.length; i++) {
    const data =
      result.data[i].name +
      " " +
      result.data[i].weather.match(/(\d+)/)[0] +
      " " +
      result.data[i].status[0].match(/(\d+)/)[0] +
      " " +
      result.data[i].status[1].match(/(\d+)/)[0];
    userData.push(data);
  }

  return userData;
};

module.exports = { weatherStation };
