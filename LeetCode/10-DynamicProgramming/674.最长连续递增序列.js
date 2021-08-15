/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let res = 1
    let dp = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1
        res = Math.max(res, dp[i])
    }
    return res
};
lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]) //5
// @lc code=end

