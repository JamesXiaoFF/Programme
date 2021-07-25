/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = [], path = []
    function backtracking(j) {
        if (path.length >= 2) { //处理
            if (path.length == nums.length) {
                res.push([...path])
                return
            }
            res.push([...path])
        }
        let used = new Array(201) //数组标记
        for (let i = j; i < nums.length; i++) {
            if (used[nums[i] + 100]) continue //数组标记法去重
            if (path.length > 0 && nums[i] < path[path.length - 1]) continue //处理
            used[nums[i] + 100] = true
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
};
console.log(findSubsequences([4, 7, 6, 7]));
// @lc code=end

