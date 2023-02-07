/**
 * @param {Array} queries - List of box dimensions
 * @returns {Array} totalWays - List of how each can arrange
 */
function numberOfWays(queries) {
  let totalWays = [];
  queries.forEach((item) => {
    if (item.length <= 1) {
      totalWays.push(item[0]);
    } else {
      let multiDigits = 0;
      let minDigit = Math.min(...item);
      for (let i = minDigit; i > 0; --i) {
        multiDigits += item[0] * item[1];
        item[0] = item[0] - 1;
        item[1] = item[1] - 1;
      }
      totalWays.push(multiDigits);
    }
  });
  return totalWays;
}

module.exports = { numberOfWays };
