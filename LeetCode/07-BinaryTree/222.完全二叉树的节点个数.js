/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var getNodesNum = function (node) {
    if (node == null) return 0
    let leftNodesNum = getNodesNum(node.left)
    let rightNodesNum = getNodesNum(node.right)
    return 1 + leftNodesNum + rightNodesNum
}
var countNodes = function (root) {
    return getNodesNum(root)
};
// @lc code=end

