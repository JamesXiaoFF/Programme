/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let res = []
let path = []
var backtracking = function (targetSum, k, j) {
    if (targetSum < 0) return
    if (path.length == k) {
        if (targetSum == 0) {
            let temp = [...path]
            res.push(temp)
        }
        return
    }
    for (let i = j; i <= 9 - (k - path.length) + 1; i++) {
        targetSum -= i
        path.push(i)
        backtracking(targetSum, k, i + 1)
        targetSum += i
        path.pop()
    }
}
var combinationSum3 = function (k, n) {
    res = []
    backtracking(n, k, 1)
    return res
};
// @lc code=end

