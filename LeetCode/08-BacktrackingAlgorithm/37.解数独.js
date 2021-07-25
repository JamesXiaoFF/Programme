/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    function isValid(row, col, val, board) {
        for (let i = 0; i < board.length; i++) {
            if (board[row][i] == val) return false
            if (board[i][col] == val) return false
        }
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] == val) return false
            }
        }
        return true
    }
    function backtracking() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] != '.') continue
                for (let val = 1; val <= 9; val++) {
                    if (!isValid(i, j, val.toString(), board)) continue
                    board[i][j] = val.toString()
                    if (backtracking()) return true
                    board[i][j] = '.'
                }
                return false
            }
        }
        return true
    }
    backtracking()
    return board
};
let res = solveSudoku([["4", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
console.log(res);
// @lc code=end

