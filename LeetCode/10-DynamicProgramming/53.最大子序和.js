/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) { //动态规划
    let res = nums[0]
    let dp = []
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] < 0) dp[i] = nums[i]
        else dp[i] = dp[i - 1] + nums[i]
        res = Math.max(res, dp[i])
    }
    return res
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //6
// @lc code=end

