/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    let pre = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= pre[1]) {
            pre[1] = Math.max(pre[1], intervals[i][1])
        }
        else {
            res.push(pre)
            pre = intervals[i]
        }
    }
    res.push(pre)
    return res
};
// @lc code=end

