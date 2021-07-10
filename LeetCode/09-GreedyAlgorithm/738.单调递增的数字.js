/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
    let arr = []
    while (n) {
        arr.unshift(n % 10)
        n = parseInt(n / 10)
    }
    let flag = Infinity
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] < arr[i - 1]) {
            arr[i - 1] -= 1
            arr[i] = 9
            flag = i
        }
    }
    for (let i = flag + 1; i < arr.length; i++) {
        arr[i] = 9
    }
    return parseInt(arr.join(''))
};
// @lc code=end

