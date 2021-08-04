/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length == 1) return 0
    let dp = new Array(5).fill().map(() => new Array())
    //0:无操作；1:第一次买入；2:第一次卖出；3:第二次买入；4:第二次卖出
    dp[0][0] = 0
    dp[1][0] = -prices[0]
    dp[2][0] = 0
    dp[3][0] = -prices[0]
    dp[4][0] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[0][i] = dp[0][i - 1]
        dp[1][i] = Math.max(dp[1][i - 1], dp[0][i - 1] - prices[i])
        dp[2][i] = Math.max(dp[2][i - 1], dp[1][i - 1] + prices[i])
        dp[3][i] = Math.max(dp[3][i - 1], dp[2][i - 1] - prices[i])
        dp[4][i] = Math.max(dp[4][i - 1], dp[3][i - 1] + prices[i])
    }
    return dp[4][prices.length - 1]
};
maxProfit([3, 3, 5, 0, 0, 3, 1, 4]) //6
// @lc code=end

