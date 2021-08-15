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
    const N = nums.length
    const sum = nums.reduce((sum, num) => sum + num, 0)
    const subsetSum = sum / k

    nums.sort((a, b) => a - b)

    const MAX_STATE = (1 << N) - 1 // 1 <= N <= 16
    let dp = new Array(MAX_STATE + 1).fill(null)
    dp[0] = 0

    // 枚举所有状态，递推
    for (let state = 1; state <= MAX_STATE; ++state) { // O(2^N)
        for (let i = 0; i < N; ++i) { // O(N)
            const iBit = 1 << i
            // 如果 state 表示未选取 nums[i] ，说明不能达到 (state, i) 状态
            if ((state & iBit) === 0) continue
            const prevState = state ^ iBit
            // NOTICE: 如果不能到达 prevState 状态
            if (dp[prevState] === null) continue
            const prevSubsetSum = dp[prevState] % subsetSum
            // 最优性剪枝优化：nums 已升序排序，如果 nums[i] 已偏大，后续更加偏大，无需尝试
            if (prevSubsetSum + nums[i] > subsetSum) break
            dp[state] = dp[prevState] + nums[i]
        }
    }
    console.log(subsetSum);
    console.log(dp)
    return dp[MAX_STATE] === sum
}
canPartitionKSubsets([2, 11, 10, 2, 10], 3) //true
// @lc code=end

