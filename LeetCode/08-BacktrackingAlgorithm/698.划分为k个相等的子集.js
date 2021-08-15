/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    let sum = nums.reduce((pre, cur) => pre + cur)
    if (sum % k != 0) return false
    let _target = sum / k
    let used = []
    function backtracking(j, target, k) {
        if (k == 1) return true //剪枝
        if (target == 0) return backtracking(0, _target, k - 1)
        for (let i = j; i < nums.length; i++) {
            if (used[i] || target - nums[i] < 0) continue
            used[i] = true
            if (backtracking(i + 1, target - nums[i], k)) return true
            used[i] = false
            while (i > 0 && nums[i] == nums[i - 1]) i++ //剪枝，important！
        }
        return false
    }
    nums.sort((a, b) => b - a) //优化，从大到小遍历（凑数肯定先凑大的）
    return backtracking(0, _target, k)
};
canPartitionKSubsets([2, 2, 2, 2, 3, 4, 5], 4) //false
// @lc code=end

