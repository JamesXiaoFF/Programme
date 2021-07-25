/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [], path = []
    function backtracking(j) {
        if (path.length == nums.length) {
            res.push([...path])
            return
        }
        res.push([...path])
        for (let i = j; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
};
console.log(subsets([1, 2, 2]));
// @lc code=end

