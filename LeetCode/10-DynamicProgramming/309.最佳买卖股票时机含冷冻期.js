/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let dp = new Array(4).fill().map(() => new Array(prices.length).fill(0))
    //0:买入；1:卖出(处于非冷冻期的卖出状态)；2:卖出(今日卖出)；3:冷冻期
    dp[0][0] = -prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], Math.max(dp[1][i - 1], dp[3][i - 1]) - prices[i])
        dp[1][i] = Math.max(dp[1][i - 1], dp[3][i - 1])
        dp[2][i] = dp[0][i - 1] + prices[i]
        dp[3][i] = dp[2][i - 1]
    }
    return Math.max(dp[1][prices.length - 1], dp[2][prices.length - 1], dp[3][prices.length - 1])
};
maxProfit([1, 3, 5, 0, 1]) //4
// @lc code=end

