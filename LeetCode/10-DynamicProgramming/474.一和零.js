/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

const { Z_RLE } = require("zlib");

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let dp = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0))
    let zeroNums, oneNums
    for (const str of strs) {
        zeroNums = 0
        oneNums = 0
        for (const c of str) {
            if (c == '0') zeroNums++
            else oneNums++
        }
        for (let i = m; i >= zeroNums; i--) {
            for (let j = n; j >= oneNums; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNums][j - oneNums] + 1)
            }
        }
    }
    return dp[m][n]
};
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 3, 1));
// @lc code=end

