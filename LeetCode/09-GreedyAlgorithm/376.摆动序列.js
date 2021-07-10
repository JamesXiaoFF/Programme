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
    if (nums.length <= 1) {
        return nums.length
    }
    let preDiff = 0, curDiff
    let count = 1
    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i]
        if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
            count++
            preDiff = curDiff
        }

    }
    return count
};
// @lc code=end

