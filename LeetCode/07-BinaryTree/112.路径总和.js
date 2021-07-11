/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var traversal = function (node, sum, targetSum) {
    if (!node.left && !node.right && sum == targetSum) return true
    if (!node.left && !node.right) return false
    if (node.left && traversal(node.left, sum + node.left.val, targetSum)) return true
    if (node.right && traversal(node.right, sum + node.right.val, targetSum)) return true
    return false
}
var hasPathSum = function (root, targetSum) {
    if (root == null) return false
    let sum = root.val
    return traversal(root, sum, targetSum)
};

// @lc code=end

