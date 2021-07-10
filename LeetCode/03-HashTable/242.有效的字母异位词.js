/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let arr = new Array(26).fill(0)
    for (const i of s) {
        arr[i.charCodeAt() - 'a'.charCodeAt()]++
    }
    for (const i of t) {
        arr[i.charCodeAt() - 'a'.charCodeAt()]--
    }
    for (const i of arr) {
        if (i != 0) {
            return false
        }
    }
    return true
};
// @lc code=end

