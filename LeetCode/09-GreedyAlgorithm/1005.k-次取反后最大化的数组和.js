/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] *= -1
            k--
        }
    }
    if (k % 2 == 1) {
        nums[nums.length - 1] *= -1
    }
    return nums.reduce((a, b) => {
        return a + b
    }, 0)
};
// @lc code=end

