/** Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * Assume that each input would have exactly one solution,
 * and you may not use the same element twice. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!Array.isArray(nums) || nums.length == 0) {
    throw new Error("error: input array error");
  }
  if (!Number.isInteger(target)) {
    throw new Error("error: target is not number");
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return null;
};

var twoSumEff = function (nums, target) {
  const arrayMap = {};
  if (!Array.isArray(nums) || nums.length == 0) {
    throw new Error("error: input array error");
  }
  if (!Number.isInteger(target)) {
    throw new Error("error: target is not number");
  }
  for (let i = 0; i < nums.length; i++) {
    if (arrayMap[nums[i]] >= 0) {
      return [arrayMap[nums[i]], i];
    }
    arrayMap[target - nums[i]] = i;
  }
  return null;
};

module.exports = { twoSum, twoSumEff };
