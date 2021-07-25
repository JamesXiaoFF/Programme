/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((pre, cur) => pre + cur)
    if (sum % 2 == 1) return false
    let target = sum / 2
    let dp = new Array(target + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] == target) return true //优化
        }
    }
    return dp[target] == target
};
// @lc code=end

