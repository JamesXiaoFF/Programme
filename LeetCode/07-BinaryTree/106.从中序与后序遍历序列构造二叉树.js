/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var traversal = function (inorder, postorder) {
    if (postorder.length == 0) return null
    let node = new TreeNode(postorder[postorder.length - 1])
    if (postorder.length == 1) return node
    let pilot = inorder.indexOf(node.val)
    let inLeft = inorder.slice(0, pilot)
    let inRight = inorder.slice(pilot + 1)
    let postLeft = postorder.slice(0, pilot)
    let postRight = postorder.slice(pilot, postorder.length - 1)
    node.left = traversal(inLeft, postLeft)
    node.right = traversal(inRight, postRight)
    return node
}
var buildTree = function (inorder, postorder) {
    return traversal(inorder, postorder)
};
// @lc code=end

