/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) { //记忆化递归
    let memoryMap = new Map()
    function traversal(node) {
        if (node == null) return 0
        if (node.left == null && node.right == null) return node.val
        if (memoryMap.has(node)) return memoryMap.get(node)
        let val1 = traversal(node.left) + traversal(node.right) //不偷node
        let val2 = node.val //偷node
        if (node.left) {
            val2 += traversal(node.left.left) + traversal(node.left.right)
        }
        if (node.right) {
            val2 += traversal(node.right.left) + traversal(node.right.right)
        }
        memoryMap.set(node, Math.max(val1, val2))
        return Math.max(val1, val2)
    }
    return traversal(root)
};

var rob = function (root) { //树形动态规划
    function traversal(node) {
        //0:不偷，1:偷
        if (node == null) return [0, 0]
        let left = traversal(node.left)
        let right = traversal(node.right)
        let val1 = node.val + left[0] + right[0] //偷node
        let val2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]) //不偷node
        return [val2, val1]
    }
    return Math.max.apply(null, traversal(root))
}
// @lc code=end

