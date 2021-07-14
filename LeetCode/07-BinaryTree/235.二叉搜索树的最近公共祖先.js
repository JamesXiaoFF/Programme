/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
    if (node.val > p.val && node.val > q.val) {
        return traversal(node.left, p, q)
    }
    if (node.val < p.val && node.val < q.val) {
        return traversal(node.right, p, q)
    }
    return node
}
var lowestCommonAncestor = function (root, p, q) {
    return traversal(root, p, q)
};
// @lc code=end

