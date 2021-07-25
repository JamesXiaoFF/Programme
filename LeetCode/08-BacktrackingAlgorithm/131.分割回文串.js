/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = function (s, l, r) {
    for (let i = l, j = r; i < j; i++, j--) {
        if (s[i] != s[j]) return false
    }
    return true
}
var partition = function (s) {
    let res = [], path = []
    function backtracking(j) {
        if (j >= s.length) {
            res.push([...path])
            return
        }
        for (let i = j; i < s.length; i++) {
            if (!isPalindrome(s, j, i)) continue
            path.push(s.substring(j, i + 1))
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
};
// @lc code=end

