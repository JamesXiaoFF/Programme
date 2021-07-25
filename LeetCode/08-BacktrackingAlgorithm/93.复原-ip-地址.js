/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var isIP = function (s, l, r) {
    s = s.substring(l, r + 1)
    let num = parseInt(s)
    if (s.length > 1 && s[0] == '0') return false
    if (num < 0 || num > 255) return false
    return true
}
var restoreIpAddresses = function (s) {
    let res = [], path = []
    function backtracking(j) {
        if (path.length > 4) return //剪枝：优化
        if (j >= s.length && path.length == 4) {
            res.push(path.join('.'))
            return
        }
        for (let i = j; i < s.length; i++) {
            if (!isIP(s, j, i)) return //同时做到两点：1.剪枝：优化  2.处理：0开头or0-255范围以外的
            path.push(s.substring(j, i + 1))
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
};
console.log(restoreIpAddresses('111111111111'));
// @lc code=end

