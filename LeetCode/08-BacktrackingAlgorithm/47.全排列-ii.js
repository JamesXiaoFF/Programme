/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let path = [], res = []
    let used = []
    function backtracking(nums, used) {
        if (path.length == nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false) continue //去重
            if (used[i] == true) continue //数组标记法去除树枝上方选过的元素
            path.push(nums[i])
            used[i] = true
            backtracking(nums, used)
            path.pop()
            used[i] = false
        }
    }
    nums.sort((a, b) => a - b)
    backtracking(nums, used)
    return res
};
console.log(permuteUnique([1, 1, 2, 2]))
// @lc code=end

