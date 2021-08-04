/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if (prices.length == 0 || prices.length == 1) return 0
    let dp = new Array(2 * k + 1).fill([]).map((item, index) => {
        if (index == 0) return new Array(prices.length).fill(0)
        if (index % 2 == 1) return [-prices[0]]
        else return [0]
    })
    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j <= 2 * k - 1; j += 2) {
            dp[j][i] = Math.max(dp[j][i - 1], dp[j - 1][i - 1] - prices[i])
            dp[j + 1][i] = Math.max(dp[j + 1][i - 1], dp[j][i - 1] + prices[i])
        }
    }
    return dp[2 * k][prices.length - 1]
};
maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4]) //6
// @lc code=end

