/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) { //记忆化递归
    let set = new Set()
    for (const item of wordDict) {
        set.add(item)
    }
    let memory = new Array(s.length).fill(-1)
    function backtracking(j) {
        if (j >= s.length) return true
        if (memory[j] != -1) return memory[j]
        for (let i = j; i < s.length; i++) {
            let word = s.substring(j, i + 1)
            if (set.has(word) && backtracking(i + 1)) {
                memory[j] = 1
                return true
            }
        }
        memory[j] = 0
        return false
    }
    return backtracking(0)
};

var wordBreak = function (s, wordDict) { //动态规划
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    let set = new Set()
    for (const item of wordDict) {
        set.add(item)
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            let word = s.substring(j, i)
            if (set.has(word) && dp[j]) {
                dp[i] = true
            }
        }
    }
    return dp[s.length]
}
console.log(wordBreak('leetcode', ['leet', 'code'])) //true
// @lc code=end

