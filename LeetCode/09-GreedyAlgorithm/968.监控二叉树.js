/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
let res
var traversal = function (node) {
    //1->无覆盖，2->有相机，3->有覆盖
    if (node == null) return 3
    let left = traversal(node.left)
    let right = traversal(node.right)
    if (left == 3 && right == 3) return 1
    if (left == 1 || right == 1) {
        res++
        return 2
    }
    if (left == 2 || right == 2) return 3
}
var minCameraCover = function (root) {
    res = 0
    let val = traversal(root)
    if (val == 1) {
        res++
    }
    return res
};

// @lc code=end

