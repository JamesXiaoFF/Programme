/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let lastIndex = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i].charCodeAt() - 'a'.charCodeAt()] = i
    }
    let visited = new Array(26).fill(0)
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (visited[s[i].charCodeAt() - 'a'.charCodeAt()]) continue
        while (stack.length &&
            stack[stack.length - 1].charCodeAt() > s[i].charCodeAt() &&
            lastIndex[stack[stack.length - 1].charCodeAt() - 'a'.charCodeAt()] > i) {
            let top = stack.pop()
            visited[top.charCodeAt() - 'a'.charCodeAt()] = 0
        }
        stack.push(s[i])
        visited[s[i].charCodeAt() - 'a'.charCodeAt()] = 1
    }
    return stack.join('')
};
removeDuplicateLetters("ecbacba")
// @lc code=end

