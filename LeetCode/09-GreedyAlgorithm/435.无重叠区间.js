/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    let res = 1
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= intervals[i - 1][1]) {
            res++
        }
        else {
            intervals[i][1] = intervals[i - 1][1]
        }
    }
    return intervals.length - res
};
// @lc code=end

