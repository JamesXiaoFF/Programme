/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let k = 0; k < nums.length; k++) {
        // if (nums[k] > target) {
        //     continue
        // }
        if (nums[k] == nums[k - 1]) {
            continue
        }
        for (let i = k + 1; i < nums.length; i++) {
            if (i > k + 1 && nums[i] == nums[i - 1]) {
                continue
            }
            let left = i + 1
            let right = nums.length - 1
            while (right > left) {
                if (nums[k] + nums[i] + nums[left] + nums[right] > target) {
                    right--
                }
                else if (nums[k] + nums[i] + nums[left] + nums[right] < target) {
                    left++
                }
                else {
                    res.push([nums[k], nums[i], nums[left], nums[right]])
                    while (right > left && nums[right] == nums[right - 1]) {
                        right--
                    }
                    while (right > left && nums[left] == nums[left + 1]) {
                        left++
                    }
                    right--
                    left++
                }
            }
        }
    }
    return res
};
// @lc code=end

