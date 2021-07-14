/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
    let count = 0, maxCount = 1
    let res = []
    let pre = null
    function traversal(node) {
        if (node == null) return
        traversal(node.left)
        if (pre == null || node.val == pre.val) {
            count++
        }
        else if (node.val != pre.val) {
            count = 1
        }
        pre = node
        if (count == maxCount) {
            res.push(node.val)
        }
        else if (count > maxCount) {
            res = []
            maxCount = count
            res.push(node.val)
        }
        traversal(node.right)
    }
    traversal(root)
    return res
};
// @lc code=end

