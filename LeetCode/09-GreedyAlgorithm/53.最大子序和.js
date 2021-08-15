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

var maxSubArray = function (nums) {
    let res = -Infinity
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        res = Math.max(res, count)
        if (count < 0) {
            count = 0
        }
    }
    return res
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //6
// @lc code=end

