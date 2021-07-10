/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode'''';[[['
 * (val, left, right) {
 *     this.val = (? (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var compare = function (left, right) {
    if (left == null && right == null) return true
    else if (left == null && right != null) return false
    else if (left != null && right == null) return false
    else if (left.val != right.val) return false
    let outside = compare(left.left, right.right)
    let inside = compare(left.right, right.left)
    let bothside = outside && inside
    return bothside

}
var isSymmetric = function (root) {
    let bool = compare(root.left, root.right)
    return bool
};
// @lc code=end

