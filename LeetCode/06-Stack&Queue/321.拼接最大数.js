/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) { //分,greedy+stack
    function findMax(nums, k) {
        let stack = []
        for (let i = 0; i < nums.length; i++) {
            while (stack.length && stack[stack.length - 1] < nums[i] && k) {
                stack.pop()
                k--
            }
            stack.push(nums[i])
        }
        if (k) stack.splice(stack.length - k, k)
        return stack
    }
    function merge(nums1, nums2) { //治
        let res = []
        while (nums1.length || nums2.length) {
            let bigger = nums1 > nums2 ? nums1 : nums2
            res.push(bigger[0])
            bigger.shift()
        }
        return res
    }
    let res = [], removeNums = nums1.length + nums2.length - k
    for (let i = 0; i <= removeNums; i++) {
        if (i <= nums1.length && removeNums - i <= nums2.length) {
            let temp = merge(findMax(nums1, i), findMax(nums2, removeNums - i))
            res = temp > res ? temp : res
        }
    }
    return res
};
maxNumber([6, 0, 4], [6, 7], 3) //[7,6,4]
// @lc code=end

