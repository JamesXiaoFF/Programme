/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    let cur = 0, pre = 0
    let res = 1
    for (let i = 1; i < nums.length; i++) {
        cur = nums[i] - nums[i - 1]
        if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
            res++
            pre = cur
        }
    }
    return res
}
wiggleMaxLength([1, 5, 5, 6, 6, 7, 7, 3]) //3
// @lc code=end

