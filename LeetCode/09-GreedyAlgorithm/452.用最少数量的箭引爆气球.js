/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0])
    let res = 1
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > points[i - 1][1]) {
            res++
        }
        else {
            points[i][1] = Math.min(points[i - 1][1], points[i][1])
        }
    }
    return res
};

var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1])
    let res = 1
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > points[i - 1][1]) res++
        else points[i][1] = points[i - 1][1]
    }
    return res
}
findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])

// @lc code=end

