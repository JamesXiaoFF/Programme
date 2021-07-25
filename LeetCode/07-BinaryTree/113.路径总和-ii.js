/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (root == null) return []
    let res = [], path = [root.val]
    function traversal(node, targetSum) {
        if (!node.left && !node.right && targetSum == 0) {
            res.push([...path])
            return
        }
        if (!node.left && !node.right) return
        if (node.left) {
            path.push(node.left.val)
            traversal(node.left, targetSum - node.left.val)
            path.pop()
        }
        if (node.right) {
            path.push(node.right.val)
            traversal(node.right, targetSum - node.right.val)
            path.pop()
        }
    }
    traversal(root, targetSum - root.val)
    return res
};
// @lc code=end

