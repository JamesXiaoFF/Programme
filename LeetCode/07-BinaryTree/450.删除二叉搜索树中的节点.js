/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root == null) return null
    if (root.val == key) {
        if (root.left == null && root.right == null) return null
        else if (root.left != null && root.right == null) return root.left
        else if (root.left == null && root.right != null) return root.right
        else {
            let node = root.right
            while (node.left) {
                node = node.left
            }
            node.left = root.left
            return root.right
        }
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    return root
};
// @lc code=end

