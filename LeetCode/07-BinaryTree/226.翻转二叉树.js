/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    let queue = []
    if (root) {
        queue.push(root)
    }
    while (queue.length) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let cur = queue.shift()
            let temp = cur.left;
            cur.left = cur.right;
            cur.right = temp;
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
    }
    return root
};
// @lc code=end

