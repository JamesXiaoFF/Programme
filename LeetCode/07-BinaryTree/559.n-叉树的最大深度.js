/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) return 0
    let depth = 0
    for (let i = 0; i < root.children.length; i++) {
        depth = Math.max(depth, maxDepth(root.children[i]))
    }
    return 1 + depth
};
// @lc code=end

