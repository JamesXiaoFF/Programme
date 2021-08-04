/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0))
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] == s[j]) {
                if (i == j) dp[i][j] = 1
                else dp[i][j] = dp[i + 1][j - 1] + 2
            }
            else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][s.length - 1]
};
longestPalindromeSubseq('accab') //4
// @lc code=end

