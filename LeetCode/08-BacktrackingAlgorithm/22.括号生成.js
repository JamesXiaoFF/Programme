/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let path = [], res = []
    function backtracking(open, close) {
        if (path.length == 2 * n) {
            res.push(path.join(''))
            return
        }
        if (open < n) {
            path.push('(')
            backtracking(open + 1, close)
            path.pop()
        }
        if (close < open) {
            path.push(')')
            backtracking(open, close + 1)
            path.pop()
        }
    }
    backtracking(0, 0)
    console.log(res);
    return res
};
generateParenthesis(3) //['((()))','(()())','(())()','()(())','()()()']
// @lc code=end

