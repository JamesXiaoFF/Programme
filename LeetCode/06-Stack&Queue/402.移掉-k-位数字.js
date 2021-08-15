/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let stack = []
    for (let i = 0; i < num.length; i++) {
        while (stack.length && stack[stack.length - 1] > num[i] && k) {
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    if (k) stack.splice(stack.length - k, k) //若k还有剩余，则截取前n-k个数字
    while (stack[0] == '0') stack.shift() //删去前面对所有0
    return stack.length == 0 ? '0' : stack.join('') //若全删了，则显示0
};
// @lc code=end

