/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length == 1) return 0
    let dp = new Array(2).fill().map(() => new Array())
    dp[0][0] = -prices[0]
    dp[1][0] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] - prices[i])
        dp[1][i] = Math.max(dp[1][i - 1], dp[0][i - 1] + prices[i])
    }
    return Math.max(dp[0][prices.length - 1], dp[1][prices.length - 1])
};
maxProfit([7, 1, 5, 3, 6, 4]) //5-1+6-3=7
// @lc code=end

