/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let fibArray = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray[n];
};

module.exports = { climbStairs };
