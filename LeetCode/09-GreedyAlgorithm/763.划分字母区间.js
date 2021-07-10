/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let arr = new Array(26)
    let res = []
    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - 'a'.charCodeAt()] = i
    }
    let left = 0
    let right = 0
    for (let i = 0; i < s.length; i++) {
        right = Math.max(right, arr[s[i].charCodeAt() - 'a'.charCodeAt()])
        if (i == right) {
            res.push(right - left + 1)
            left = i + 1
        }
    }
    return res
};
// @lc code=end

