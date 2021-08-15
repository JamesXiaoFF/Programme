/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) { //递归，但是超复杂度
    let max = -Infinity
    let res = 0
    function backtracking(j) {
        if (max >= left) res++
        for (let i = j; i < nums.length; i++) {
            if (j > 0 && i > j) return
            if (nums[i] > right) continue
            let temp = max
            max = Math.max(max, nums[i])
            backtracking(i + 1)
            max = temp
        }
    }
    backtracking(0)
    console.log(res);
    return res
};

var numSubarrayBoundedMax = function (nums, left, right) { //动态规划
    let temp = -1
    let dp = []
    dp[0] = 0
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] < left) dp[i] = dp[i - 1]
        else if (nums[i - 1] >= left && nums[i - 1] <= right) dp[i] = i - 1 - temp
        else {
            dp[i] = 0
            temp = i - 1
        }
    }
    console.log(dp);
    return dp.reduce((pre, cur) => pre + cur)
}

numSubarrayBoundedMax([2, 1, 4, 3], 2, 3) //3    [2],[2,1],[3]
// @lc code=end

