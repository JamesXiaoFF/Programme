/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let used = []
    let path = [], res = []
    function backtracking(nums, used) {
        if (path.length == nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i] == true) continue //数组标记法去除树枝上方选过的元素
            path.push(nums[i])
            used[i] = true
            backtracking(nums, used)
            path.pop()
            used[i] = false
        }
    }
    backtracking(nums, used)
    return res
};
// @lc code=end

