/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
    let res = []
    let stack = []
    let cur = root
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur)
            res.push(cur.val)
            cur = cur.left
        }
        else {
            cur = stack.pop().right
        }
    }
    return res
};
// @lc code=end

