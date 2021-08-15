/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let dp = new Array(s.length + 1).fill().map(() => new Array(p.length + 1).fill(0))
    dp[0][0] = 1
    for (let i = 1; i <= s.length; i++) {
        dp[i][0] = 0
    }
    for (let i = 1; i <= p.length; i++) {
        if (dp[0][i - 1] == 1 && p[i - 1] == '*') dp[0][i] = 1
        else dp[0][i] = 0
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1].charCodeAt() >= 97 && p[j - 1].charCodeAt() <= 122) {
                if (p[j - 1] == s[i - 1]) dp[i][j] = dp[i - 1][j - 1]
            }
            else if (p[j - 1] == '?') {
                dp[i][j] = dp[i - 1][j - 1]
            }
            else if (p[j - 1] == '*') {
                if (dp[i - 1][j] || dp[i][j - 1]) dp[i][j] = 1
            }
        }
    }
    return dp[s.length][p.length]
};
// @lc code=end

