/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

let res = []
let path = []
var backtracking = function (n, k, j) {
    if (path.length == k) {
        let temp = [...path]
        res.push(temp)
        return
    }
    for (let i = j; i <= n - (k - path.length) + 1; i++) { //剪枝优化
        path.push(i)
        backtracking(n, k, i + 1)
        path.pop()
    }
}
var combine = function (n, k) {
    res = []
    backtracking(n, k, 1)
    return res
};
// @lc code=end

