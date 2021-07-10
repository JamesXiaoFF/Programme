/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
//不能同时既想左又想右，那样会顾此失彼
var candy = function (ratings) {
    let res = new Array(ratings.length).fill(1)
    for (let i = 1; i < ratings.length; i++) { //若右比左大
        if (ratings[i] > ratings[i - 1]) {
            res[i] = res[i - 1] + 1
        }
    }
    for (let i = ratings.length - 2; i > -1; i--) { //若左比右大
        if (ratings[i] > ratings[i + 1]) {
            res[i] = Math.max(res[i + 1] + 1, res[i])
        }
    }
    return res.reduce((a, b) => {
        return a + b
    }, 0)
};
// @lc code=end

