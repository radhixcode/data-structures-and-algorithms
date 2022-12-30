/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const charMap = {};
  let outputString = "";

  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] = charMap[s[i]] ? (charMap[s[i]] += 1) : 1;
  }
  let sortedCharMap = Object.entries(charMap).sort((a, b) => {
    return b[1] - a[1];
  });
  sortedCharMap.forEach((item) => {
    outputString += item[0].repeat(item[1]);
  });
  return outputString;
};

module.exports = { frequencySort };
