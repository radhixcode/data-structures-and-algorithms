/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const output = [];
  const backtrack = function (idx, subset) {
    output.push([...subset]);
    for (let i = idx; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1, subset); // create next subset
      subset.pop(); // backtrack
    }
  };
  backtrack(0, []);
  return output;
};

module.exports = { subsets };
