/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

const { runInNewContext } = require("vm");

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    let res = 0
    let dp = new Array(nums1.length + 1).fill().map(() => new Array(nums2.length + 1).fill(0))
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                res = Math.max(res, dp[i][j])
            }
        }
    }
    return res
};
findLength([1, 2, 3, 2, 1, 7], [3, 2, 1, 4, 7]) //3
// @lc code=end

