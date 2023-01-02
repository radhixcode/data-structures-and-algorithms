/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let maxLength = 0;
  const uniqueSet = new Set();

  while (i < s.length) {
    if (!uniqueSet.has(s[i])) {
      uniqueSet.add(s[i]);
      maxLength = Math.max(maxLength, uniqueSet.size);
      i++;
    } else {
      uniqueSet.delete(s[j]);
      j++;
    }
  }
  return maxLength;
};

module.exports = { lengthOfLongestSubstring };
