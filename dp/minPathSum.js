/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    matrix[0][0] = grid[0][0];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (row === 0 && col === 0) {
                continue;
            } else if (row === 0) {
                matrix[row][col] = matrix[row][col - 1] + grid[row][col]
            } else if (col === 0) {
                matrix[row][col] = matrix[row - 1][col] + grid[row][col]
            } else {
                matrix[row][col] = grid[row][col] + Math.min(matrix[row - 1][col], matrix[row][col - 1]);
            }
        }
    }

    return matrix[rows - 1][cols - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
console.log(minPathSum([[1,2,3],[4,5,6]]))
console.log(minPathSum([[1],[4]]))
console.log(minPathSum([[1]]))
/*
*
* Example 1:

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.


Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
* */