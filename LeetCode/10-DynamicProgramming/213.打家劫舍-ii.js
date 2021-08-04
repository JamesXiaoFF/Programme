/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0]
    function robRange(left, right) {
        let dp = []
        dp[left] = nums[left]
        dp[left + 1] = Math.max(nums[left], nums[left + 1])
        for (let i = left + 2; i <= right; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }
        return dp[right]
    }
    return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1))
};
rob([2, 3, 2]) //3
// @lc code=end

