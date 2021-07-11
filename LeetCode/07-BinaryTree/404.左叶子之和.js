/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var getSum = function (node) {
    if (node == null) return 0
    let leftSum = getSum(node.left)
    let rightSum = getSum(node.right)
    let midSum = 0
    if (node.left != null && node.left.left == null && node.left.right == null) {
        midSum = node.left.val
    }
    return midSum + leftSum + rightSum

}
var sumOfLeftLeaves = function (root) {
    return getSum(root)
};
// @lc code=end

