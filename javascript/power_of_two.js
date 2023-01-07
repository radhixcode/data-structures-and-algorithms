/**
 * @param {number} n
 * @return {number}
 */
var powerOfTwo = function (n) {
  let maxPowerTwo = 1;
  if (n <= 2) return 1;

  for (let i = 1; i < n; i++) {
    let powerTwo = Math.pow(2, i);
    if (powerTwo <= n) {
      maxPowerTwo = Math.max(maxPowerTwo, powerTwo);
    } else {
      break;
    }
  }
  return maxPowerTwo;
};

module.exports = { powerOfTwo };
