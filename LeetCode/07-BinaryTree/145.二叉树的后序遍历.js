/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    let res = []
    let stack = []
    let cur = root
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur)
            res.push(cur.val)
            cur = cur.right
        }
        else {
            cur = stack.pop().left
        }
    }
    return res.reverse()
};
// @lc code=end

