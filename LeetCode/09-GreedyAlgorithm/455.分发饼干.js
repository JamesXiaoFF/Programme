/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let index1 = 0, index2 = 0
    while (index1 < g.length && index2 < s.length) {
        if (s[index2] >= g[index1]) index1++
        index2++
    }
    return index1
};
// @lc code=end

