/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var getSum = function (n) {
    let sum = 0
    while (n != 0) {
        sum += (n % 10) * (n % 10)
        n = parseInt(n / 10)
    }
    return sum
}
var isHappy = function (n) {
    let numSet = new Set()
    while (n != 1 && !numSet.has(n)) {
        numSet.add(n)
        n = getSum(n)
    }
    return n == 1
};

// @lc code=end

