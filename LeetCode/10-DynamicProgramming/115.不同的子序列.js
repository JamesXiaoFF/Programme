/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let dp = new Array(s.length + 1).fill().map((item, index) => {
        if (index == 0) return new Array(t.length + 1).fill(0)
        else return [1]
    })
    dp[0][0] = 1
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] == t[j - 1]) dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
            else dp[i][j] = dp[i - 1][j]
        }
    }
    console.log(dp);
    return dp[s.length][t.length]
};
numDistinct('rabbbit', 'rabbit')
// @lc code=end

