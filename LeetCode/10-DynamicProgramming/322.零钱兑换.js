/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount == 0) return 0
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            if (dp[j - coins[i]] == Infinity) continue
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
        }
    }
    if (dp[amount] == Infinity) return -1
    else return dp[amount]
};
// @lc code=end

