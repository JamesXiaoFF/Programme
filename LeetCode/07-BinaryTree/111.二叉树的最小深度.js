/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var getDepth = function (node) {
    if (node == null) return 0
    let leftDepth = getDepth(node.left)
    let rightDepth = getDepth(node.right)
    if (node.left == null && node.right != null) {
        return rightDepth + 1
    }
    if (node.left != null && node.right == null) {
        return leftDepth + 1
    }
    return Math.min(leftDepth, rightDepth) + 1
}
var minDepth = function (root) {
    return getDepth(root)
};
// @lc code=end

