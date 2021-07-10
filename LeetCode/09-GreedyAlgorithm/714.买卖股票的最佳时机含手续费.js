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
    let res = 0
    let minprice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i]
        }
        else if (prices[i] >= minprice && prices[i] <= minprice + fee) {
            continue
        }
        else {
            res += prices[i] - minprice - fee
            minprice = prices[i] - fee
        }
    }
    return res
};

// @lc code=end

