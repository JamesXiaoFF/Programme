/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
    let countMap = new Map()
    let endMap = new Map()
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1)
    }
    for (const num of nums) {
        if (!countMap.get(num)) continue
        if (endMap.get(num - 1)) {
            endMap.set(num - 1, endMap.get(num - 1) - 1)
            endMap.set(num, (endMap.get(num) || 0) + 1)
            countMap.set(num, countMap.get(num) - 1)
        }
        else {
            if (countMap.get(num + 1) && countMap.get(num + 2)) {
                endMap.set(num + 2, (endMap.get(num + 2) || 0) + 1)
                countMap.set(num, countMap.get(num) - 1)
                countMap.set(num + 1, countMap.get(num + 1) - 1)
                countMap.set(num + 2, countMap.get(num + 2) - 1)
            }
            else return false
        }
    }
    return true
};
isPossible([1, 2, 3, 3, 4, 5]) //true
// @lc code=end

