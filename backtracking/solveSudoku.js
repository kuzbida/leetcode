/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const results = [];
    const rowL = board.length;
    const colL = board[0].length;
    const rowCache = new Array(rowL).fill(0).map(() => new Set());
    const colCache = new Array(colL).fill(0).map(() => new Set());
    const boxCache = new Array(9).fill(0).map(() => new Set());

    for (let row = 0; row < rowL; row++) {
        for (let col = 0; col < colL; col++) {
            if (board[row][col] !== '.') {
                const val = board[row][col].toString();
                const boxId = getBoxId(row, col);

                rowCache[row].add(val);
                colCache[col].add(val);
                boxCache[boxId].add(val);
            }
        }
    }


    backTracking(board, boxCache, rowCache, colCache, 0, 0, results);


    return results[0] ? results[0] : board;
};

function backTracking(board, boxes, rows, cols, r, c, results) {
    // console.log(board);
    // console.log('=======');
    const rowL = board.length;
    const colL = board[0].length;

    for (let row = r; row < rowL; row++) {
        for (let col = c; col < colL; col++) {
            if (row === rowL - 1 && col === colL - 1) {
                results.push(board);

                return board;
            }
            const currentRow = rows[row];
            const currentCol = cols[col];
            const currentBox = boxes[getBoxId(row, col)];

            if (board[row][col] === '.') {
                if (currentRow.size === 9 && currentCol.size === 9 && currentBox.size === 9) {
                    continue;
                }


                for (let i = 1; i <= 9; i++) {
                    const val = i.toString();
                    if (currentRow.has(val) || currentCol.has(val) || currentBox.has(val)) {
                        continue;
                    }
                    currentRow.add(val);
                    currentCol.add(val);
                    currentBox.add(val);
                    board[row][col] = val;

                    if (col < colL) {
                        backTracking(board, boxes, rows, cols, row, col + 1, results);
                    } else {
                        backTracking(board, boxes, rows, cols, row + 1, col, results);
                    }
                }
            }
        }
    }
}

function getBoxId(row, col) {
    const colVal = Math.floor(col / 3);
    const rowVal = Math.floor(row / 3) * 3;

    return rowVal + colVal;
}

function buildSquare(row, col, board) {
    const result = [];
    let [rowStart, rowEnd] = getPosition(row);
    let [colStart, colEnd] = getPosition(col);

    function getPosition(position) {
        switch (position) {
            case 0:
            case 1:
            case 2:
                return [0, 2];
            case 3:
            case 4:
            case 5:
                return [3, 5];
            case 6:
            case 7:
            case 8:
                return [6, 8];
        }
    }


    for (let r = rowStart; r <= rowEnd; r++) {
        for (let c = colStart; c <= colEnd; c++) {
            if (board[r][c] !== '.') {
                result.push(board[r][c])
            }
        }
    }


    return result;
}


var board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(solveSudoku(board))


/*
*
* Example 1:


Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
*/