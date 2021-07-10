/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length == 1) {
        return 0
    }
    let curCover = 0
    let nextCover = 0
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        nextCover = Math.max(i + nums[i], nextCover)
        if (i == curCover) {
            res++
            if (nextCover >= nums.length - 1) {
                break
            }
            curCover = nextCover
        }
    }
    return res
};
// @lc code=end

