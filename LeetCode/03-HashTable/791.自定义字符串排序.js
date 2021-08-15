/*
 * @lc app=leetcode.cn id=791 lang=javascript
 *
 * [791] 自定义字符串排序
 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let map = new Map()
    let res = ''
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], 0)
    }
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    for (const [k, v] of map) { //map可迭代，所以可以用for of遍历
        res += k.repeat(v)
    }
    return res
};
// @lc code=end

