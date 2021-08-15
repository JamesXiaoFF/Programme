/*
 * @lc app=leetcode.cn id=330 lang=javascript
 *
 * [330] 按要求补齐数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let res = 0, x = 1
    let i = 0
    while (x <= n) {
        if (i < nums.length && x >= nums[i]) {
            x += nums[i]
            i++
        }
        else {
            x *= 2
            res++
        }
    }
    return res
};
// @lc code=end

