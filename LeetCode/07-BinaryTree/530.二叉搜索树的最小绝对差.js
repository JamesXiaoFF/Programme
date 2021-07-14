/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
let temp = Infinity
let pre = null
var traversal = function (node) {
    if (node == null) return
    traversal(node.left)
    if (pre != null && Math.abs(node.val - pre.val) < temp) {
        temp = Math.abs(node.val - pre.val)
    }
    pre = node
    traversal(node.right)
}
var getMinimumDifference = function (root) {
    temp = Infinity
    traversal(root)
    return temp
};
// @lc code=end

