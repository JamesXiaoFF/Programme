/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
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
    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] == '*') dp[0][i] = dp[0][i - 2]
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] == '*') { //p的最后是*
                if (p[j - 2] == s[i - 1] || p[j - 2] == '.') {
                    if (dp[i - 1][j] || dp[i][j - 2]) dp[i][j] = 1
                }
                else {
                    dp[i][j] = dp[i][j - 2]
                }
            }
            else { //p的最后是.或者小写字母
                if (p[j - 1] == s[i - 1] || p[j - 1] == '.') dp[i][j] = dp[i - 1][j - 1]
            }
        }
    }
    return dp[s.length][p.length]
};
isMatch('aaa', 'ab*a*c*a')
// @lc code=end

