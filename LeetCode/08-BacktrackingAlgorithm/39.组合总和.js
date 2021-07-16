/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [], path = []
    function backtracking(candidates, target, j) {
        if (target < 0) return
        if (target == 0) {
            let temp = [...path]
            res.push(temp)
            return
        }
        for (let i = j; i < candidates.length; i++) {
            target -= candidates[i]
            if (target < 0) return
            path.push(candidates[i])
            backtracking(candidates, target, i)
            target += candidates[i]
            path.pop()
        }
    }
    candidates.sort((a, b) => a - b)
    backtracking(candidates, target, 0)
    return res
};
// @lc code=end

