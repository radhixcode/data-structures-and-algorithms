/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (typeof s !== "string" || s === "") {
    throw new Error("error: input error");
  }
  let charMap = {};
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      charMap[s[i]] += 1;
    } else {
      charMap[s[i]] = 1;
    }
  }
  for (let key of Object.keys(charMap)) {
    if (charMap[key] == 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};

var firstUniqCharEff = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};

module.exports = { firstUniqChar, firstUniqCharEff };
