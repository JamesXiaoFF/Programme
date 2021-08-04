/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

const { count } = require("console");

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let res = 0
    let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0))
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] == s[j]) {
                if (i == j || j - i == 1) {
                    dp[i][j] = 1
                    res++
                }
                else if (dp[i + 1][j - 1]) {
                    dp[i][j] = 1
                    res++
                }
            }
        }
    }
    return res
};
countSubstrings('accab') //7
// @lc code=end

