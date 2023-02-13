/**
 * @param {string} s
 * @return {boolean}
 */
var isValidPara = function (s) {
  let stack = [];
  let para_map = { "}": "{", "]": "[", ")": "(" };
  for (let i = 0; i < s.length; i++) {
    if (!para_map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top_element = stack.pop();
      if (top_element !== para_map[s[i]]) return false;
    }
  }
  return stack.length == 0;
};

module.exports = { isValidPara };
