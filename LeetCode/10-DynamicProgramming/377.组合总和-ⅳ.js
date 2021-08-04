/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let j = 0; j <= target; j++) {
        for (let i = 0; i < nums.length; i++) {
            if (j >= nums[i]) dp[j] += dp[j - nums[i]]
        }
    }
    return dp[target]
};
combinationSum4([1, 2, 3], 4)
// @lc code=end

