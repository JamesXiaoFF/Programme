/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

var traversal = function (node1, node2) {
    if (node1 == null && node2 == null) return null
    if (node1 == null && node2 != null) return node2
    if (node1 != null && node2 == null) return node1
    node1.val += node2.val
    node1.left = traversal(node1.left, node2.left)
    node1.right = traversal(node1.right, node2.right)
    return node1
}
var mergeTrees = function (root1, root2) {
    return traversal(root1, root2)
};
// @lc code=end

