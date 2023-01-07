/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const charMapS = {};
  const charMapT = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    charMapS[s[i]] = charMapS[s[i]] ? (charMapS[s[i]] += 1) : 1;
    charMapT[t[i]] = charMapT[t[i]] ? (charMapT[t[i]] += 1) : 1;
  }
  for (sChar in charMapS) {
    if (!charMapT[sChar] || charMapS[sChar] !== charMapT[sChar]) {
      return false;
    }
  }
  return true;
};

module.exports = { isAnagram };
