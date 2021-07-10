/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//哈希法
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i]
        if (a > 0) {
            continue
        }
        if (a == nums[i - 1]) { //剪枝，去重a
            continue
        }
        let set = new Set()
        for (let j = i + 1; j < nums.length; j++) {
            let b = nums[j]
            if (j > i + 2 && b == nums[j - 1] && nums[j - 1] == nums[j - 2]) { //剪枝，去重b
                continue
            }
            let c = 0 - a - b
            if (set.has(c)) {
                res.push([a, b, c])
                set.delete(c) //剪枝，去重c
            }
            else {
                set.add(b)
            }
        }
    }
    return res
};
//双指针法
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            continue
        }
        if (nums[i] == nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while (right > left) {
            if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            }
            else if (nums[i] + nums[left] + nums[right] < 0) {
                left++
            }
            else {
                res.push([nums[i], nums[left], nums[right]])
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
    return res
}



// @lc code=end

