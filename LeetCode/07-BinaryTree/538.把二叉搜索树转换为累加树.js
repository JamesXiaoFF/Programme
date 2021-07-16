/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
let pre = null
var traversal = function (node) {
    if (node == null) return
    traversal(node.right)
    if (pre != null) {
        node.val += pre.val
    }
    pre = node
    traversal(node.left)
}
var convertBST = function (root) {
    pre = null
    traversal(root)
    return root
};
// @lc code=end

