/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [], path = []
    function backtracking(candidates, target, j) {
        if (target < 0) return
        if (target == 0) {
            let temp = [...path]
            res.push(temp)
            return
        }
        for (let i = j; i < candidates.length; i++) {
            if (i > j && candidates[i] == candidates[i - 1]) continue
            target -= candidates[i]
            if (target < 0) return
            path.push(candidates[i])
            backtracking(candidates, target, i + 1)
            target += candidates[i]
            path.pop()
        }
    }
    candidates.sort((a, b) => a - b)
    backtracking(candidates, target, 0)
    return res
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// @lc code=end

