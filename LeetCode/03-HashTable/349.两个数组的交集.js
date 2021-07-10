/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    if (nums1.length < nums2.length) {
        let _ = nums1
        nums1 = nums2
        nums2 = _
    }
    let set1 = new Set(nums1)
    let resset = new Set()
    for (let item of nums2) {
        if (set1.has(item)) {
            resset.add(item)
        }
    }
    return Array.from(resset)
};
// @lc code=end

