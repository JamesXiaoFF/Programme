/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    let queue = []
    if (root) {
        queue.push(root)
    }
    while (queue.length) {
        let size = queue.length
        let temp = []
        for (let i = 0; i < size; i++) {
            let cur = queue.shift()
            temp.push(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
        res.push(temp)
    }
    return res
};
// @lc code=end

