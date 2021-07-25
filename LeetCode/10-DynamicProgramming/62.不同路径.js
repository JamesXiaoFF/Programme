/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = new Array(m).fill([]).map(() => new Array(n).fill(1))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0 && j > 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
            else if (i == 0 && j > 0) {
                dp[i][j] = dp[i][j - 1]
            }
            else if (i > 0 && j == 0) {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[m - 1][n - 1]
};


// var uniquePaths = function (m, n) {
//     let res = 0
//     function traversal(i, j) {
//         if (i > m || j > n) return
//         if (i == m && j == n) {
//             res++
//             return
//         }
//         traversal(i + 1, j)
//         traversal(i, j + 1)
//     }
//     traversal(1, 1)
//     return res
// }


// var uniquePaths = function (m, n) {
//     let numerator = 1, k = m + n - 2
//     let denominator = m - 1, count = m - 1
//     while (count) {
//         count--
//         numerator *= k
//         k--
//         while (denominator != 0 && numerator % denominator == 0) {
//             numerator /= denominator
//             denominator--
//         }
//     }
//     return numerator
// }
console.log(uniquePaths(3, 7));
// @lc code=end

