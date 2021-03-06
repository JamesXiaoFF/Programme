/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 3) return n
    let dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        [dp[1], dp[2]] = [dp[2], dp[1] + dp[2]]
    }
    return dp[2]
};
// @lc code=end

