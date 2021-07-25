/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let path = [], res = []
    function backtracking(j) {
        if (path.length == nums.length) {
            res.push([...path])
            return
        }
        res.push([...path])
        for (let i = j; i < nums.length; i++) {
            if (i > j && nums[i] == nums[i - 1]) continue
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    nums.sort((a, b) => a - b)
    backtracking(0)
    return res
};
console.log(subsetsWithDup([1, 2, 2]));
// @lc code=end

