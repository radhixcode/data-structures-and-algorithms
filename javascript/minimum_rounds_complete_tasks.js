/**
 * You are given a 0-indexed integer array tasks,
 * where tasks[i] represents the difficulty level of a task.
 * In each round, you can complete either 2 or 3 tasks of the same difficulty level.
 * Input: tasks = [2,2,3,3,2,4,4,4,4,4]
 * Output: 4
 */

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let taskMap = {};
  let roundCount = 0;
  for (let i = 0; i < tasks.length; i++) {
    taskMap[tasks[i]] = taskMap[tasks[i]] ? (taskMap[tasks[i]] += 1) : 1;
  }
  for (key in taskMap) {
    if (taskMap[key] < 2) {
      return -1;
    } else {
      roundCount += Math.ceil(taskMap[key] / 3);
    }
  }
  return roundCount;
};

module.exports = { minimumRounds };
