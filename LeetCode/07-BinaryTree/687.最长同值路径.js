/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function (root) {
    let res = 0
    function traversal(node) {
        if (node == null) return 0
        let left = traversal(node.left)
        let right = traversal(node.right)
        if (node.left && node.val == node.left.val) left++
        else left = 0
        if (node.right && node.val == node.right.val) right++
        else right = 0
        res = Math.max(res, left + right)
        return Math.max(left, right)
    }
    traversal(root)
    return res
};
// @lc code=end

