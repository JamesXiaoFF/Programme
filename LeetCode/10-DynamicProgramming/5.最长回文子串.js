/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let count = 0, left, right
    let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0))
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] == s[j]) {
                if (i == j || j - i == 1) dp[i][j] = 1
                else if (dp[i + 1][j - 1]) dp[i][j] = 1
                if (dp[i][j] && j - i + 1 > count) {
                    count = j - i + 1
                    left = i
                    right = j + 1
                }
            }
        }
    }
    return s.substring(left, right)
};
longestPalindrome('cbbd')
// @lc code=end

