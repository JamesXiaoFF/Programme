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
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        temp += nums[i]
        if (res < temp) {
            res = temp
        }
        if (temp < 0) {
            temp = 0
        }
    }
    return res
};
// @lc code=end

