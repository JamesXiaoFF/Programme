/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */

//莫名其妙，不知道为什么无法通过
let temp = -Infinity
var traversal = function (node) {
    if (node == null) return true
    let left = traversal(node.left)
    if (node.val > temp) {
        temp = node.val
    }
    else {
        return false
    }
    let right = traversal(node.right)
    return left && right
}
var isValidBST = function (root) {
    temp = -Infinity
    return traversal(root)
};

// @lc code=end

