/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let arr = new Array(26).fill(0)
    for (const i of magazine) {
        arr[i.charCodeAt() - 'a'.charCodeAt()]++
    }
    for (const i of ransomNote) {
        arr[i.charCodeAt() - 'a'.charCodeAt()]--
        if (arr[i.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false
        }
    }
    return true
};
// @lc code=end

