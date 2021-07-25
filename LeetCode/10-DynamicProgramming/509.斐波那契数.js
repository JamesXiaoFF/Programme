/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    //dp
    if (n < 2) return n
    let dp = []
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        [dp[0], dp[1]] = [dp[1], dp[0] + dp[1]]
    }
    return dp[1]
};
var fib = function (n) {
    //递归
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}
// @lc code=end

