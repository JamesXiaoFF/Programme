/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var traversal = function (node, p, q) {
    if (node == p || node == q || node == null) return node
    let left = traversal(node.left, p, q)
    let right = traversal(node.right, p, q)
    if (left != null && right != null) return node
    else if (left != null && right == null) return left
    else if (left == null && right != null) return right
    else if (left == null && right == null) return null
}
var lowestCommonAncestor = function (root, p, q) {
    return traversal(root, p, q)
};
// @lc code=end

