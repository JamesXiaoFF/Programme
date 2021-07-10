/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */

var traversal = function (node, path, res) {
    if (!node.left && !node.right) {
        path += node.val
        res.push(path)
        return
    }
    path += node.val + '->'
    node.left && traversal(node.left, path, res)
    node.right && traversal(node.right, path, res)
    return
}
var binaryTreePaths = function (root) {
    let res = []
    var path = ''
    traversal(root, path, res)
    return res
};



// @lc code=end

