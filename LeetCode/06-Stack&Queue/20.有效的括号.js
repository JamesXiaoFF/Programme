/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') stack.push(')')
        else if (s[i] == '[') stack.push(']')
        else if (s[i] == '{') stack.push('}')
        //反括号有多
        else if (!stack.length && (s[i] == ')' || s[i] == ']' || s[i] == '}')) return false
        //不匹配
        else if (stack.length && stack[stack.length - 1] != s[i]) return false
        else stack.pop()
    }
    //正括号有多
    return stack.length == 0
};
// @lc code=end

