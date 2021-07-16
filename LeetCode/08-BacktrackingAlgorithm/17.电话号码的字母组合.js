/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let res = [], path = []
    if (digits.length == 0) return []
    if (digits.length == 1) return map[digits].split('')
    function backtracking(digits, k, j) {
        if (path.length == k) {
            res.push(path.join(''))
            return
        }
        for (const item of map[digits[j]]) {
            path.push(item)
            backtracking(digits, k, j + 1)
            path.pop()
        }
    }
    backtracking(digits, digits.length, 0)
    return res
};
// @lc code=end

