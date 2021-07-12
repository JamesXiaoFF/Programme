/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var traversal = function (nums, left, right) {
    //左闭右开区间
    if (left >= right) return null
    let temp = -Infinity
    let pilot
    for (let i = left; i < right; i++) {
        if (nums[i] > temp) {
            temp = nums[i]
            pilot = i
        }
    }
    let node = new TreeNode(nums[pilot])
    if (left == right - 1) return node
    node.left = traversal(nums, left, pilot)
    node.right = traversal(nums, pilot + 1, right)
    return node
}
var constructMaximumBinaryTree = function (nums) {
    return traversal(nums, 0, nums.length)
};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
constructMaximumBinaryTree([3, 2, 1, 6, 0, 5], 0, 6)
// @lc code=end

