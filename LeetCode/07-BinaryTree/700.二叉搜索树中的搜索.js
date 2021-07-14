/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function (root, val) {
    let res = null
    let cur = root
    let stack = []
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        }
        else {
            cur = stack.pop()
            if (cur.val == val) {
                res = cur
                break
            }
            if (cur.val > val) {
                break
            }
            cur = cur.right
        }
    }
    return res
};

// @lc code=end

