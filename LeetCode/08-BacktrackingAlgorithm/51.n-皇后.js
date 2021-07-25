/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let chessboard = new Array(n).fill([])
        .map(() => new Array(n).fill('.'))
    let res = []
    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (chessboard[i][col] == 'Q') return false
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chessboard[i][j] == 'Q') return false
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (chessboard[i][j] == 'Q') return false
        }
        return true
    }
    function transfer(obj) {
        let res = []
        for (const [key, val] of Object.entries(obj)) {
            res[key] = val.join('')
        }
        return res
    }
    function backtracking(row) {
        if (row == n) {
            res.push(transfer(chessboard))
            return
        }
        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) continue
            chessboard[row][col] = 'Q'
            backtracking(row + 1)
            chessboard[row][col] = '.'
        }
    }
    backtracking(0)
    return res
};
console.log(solveNQueens(4))
// @lc code=end

