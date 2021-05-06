/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    // let path = 0;


    // traverse(grid, 0, 0, path);

    return traverse(grid, 0, 0, grid[0][0]);
};


function traverse(grid, row, col, path) {
    console.log(grid[row][col])
    const rows = grid.length;
    const cols = grid[0].length;

    if (row === rows - 1 && col === cols - 1) {
        return path;
    }

    const rightMove = col < cols - 1 ? grid[row][col + 1] : Infinity;
    const bottomMove = row < rows - 1 ? grid[row + 1][col] : Infinity;

    if (rightMove < bottomMove) {
        return traverse(grid, row, col + 1, path + rightMove);
    } else {
        return traverse(grid, row + 1, col, path + bottomMove);
    }


}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
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