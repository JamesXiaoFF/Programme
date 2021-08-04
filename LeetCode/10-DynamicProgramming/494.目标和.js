/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let sum = nums.reduce((pre, cur) => pre + cur)
    if (target > sum || (sum + target) % 2) return 0
    let positiveNumSize = (sum + target) / 2
    let dp = new Array(positiveNumSize + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = positiveNumSize; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[positiveNumSize]
};
console.log(findTargetSumWays([2, 1], 1));
// @lc code=end

