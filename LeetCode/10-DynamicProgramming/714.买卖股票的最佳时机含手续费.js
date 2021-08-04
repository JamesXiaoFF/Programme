/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    let dp = new Array(2).fill().map(() => new Array())
    dp[0][0] = -prices[0]
    dp[1][0] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] - prices[i])
        dp[1][i] = Math.max(dp[1][i - 1], dp[0][i - 1] + prices[i] - fee)
    }
    console.log(dp);
    return dp[1][prices.length - 1]
};
maxProfit([1, 3, 2, 8, 4, 9], 2)
// @lc code=end

