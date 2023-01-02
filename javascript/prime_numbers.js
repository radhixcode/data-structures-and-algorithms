/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPrime = new Uint8Array(n).fill(true, 2);
  let count = 0;
  let primeNums = [];
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      primeNums.push(i);
      count++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return count;
};

module.exports = { countPrimes };
