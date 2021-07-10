/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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

//递归后序遍历，求root的最大高度，即为最大深度
// var getDepth = function (node) {
//     if (node == null) return 0
//     let leftDepth = getDepth(node.left)
//     let rightDepth = getDepth(node.right)
//     return 1 + Math.max(leftDepth, rightDepth)
// }
// var maxDepth = function (root) {
//     return getDepth(root)
// };

//递归先序遍历，比较每一个node的深度，找到max，即为最大深度
let res
var getDepth = function (node, depth) {
    res = Math.max(res, depth)
    if (node.left == null && node.right == null) return
    if (node.left) {
        depth++
        getDepth(node.left, depth)
        depth--
    }
    if (node.right) {
        depth++
        getDepth(node.right, depth)
        depth--
    }
    return
}
var maxDepth = function (root) {
    res = 0
    if (root == null) return res
    getDepth(root, 1)
    return res
};
// @lc code=end

