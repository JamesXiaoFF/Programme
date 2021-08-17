/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let arr = new Array(26).fill(0)
    let max = -Infinity, x = 0
    for (const letter of tasks) {
        arr[letter.charCodeAt() - 'A'.charCodeAt()] += 1
    }
    for (const num of arr) {
        max = Math.max(max, num)
    }
    for (const num of arr) {
        if (num == max) x++
    }
    return Math.max(tasks.length, (max - 1) * (n + 1) + x)
};
// @lc code=end

