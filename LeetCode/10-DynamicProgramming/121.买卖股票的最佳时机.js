/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) { //贪心算法
    let low = Infinity
    let res = 0
    for (let i = 0; i < prices.length; i++) {
        low = Math.min(low, prices[i])
        res = Math.max(res, prices[i] - low)
    }
    return res
};

var maxProfit = function (prices) { //动态规划
    if (prices.length == 1) return 0
    let dp = new Array(2).fill().map(() => new Array())
    //0:买入；1:卖出
    dp[0][0] = -prices[0]
    dp[1][0] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], -prices[i])
        dp[1][i] = Math.max(dp[1][i - 1], dp[0][i - 1] + prices[i])
    }
    return dp[1][prices.length - 1]
}
// @lc code=end

