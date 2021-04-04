/**
 * @param {character[][]} grid
 * @return {number}
 */
var directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
];

function validCoordinates(row, col, grid) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
}

function coverIsland(grid, row, col) {
    grid[row][col] = '0';

    for (let i = 0; i < directions.length; i++) {
        const [directionRow, directionCol] = directions[i];
        const newRow = row + directionRow;
        const newCol = col + directionCol;
        if (validCoordinates(newRow, newCol, grid) && grid[newRow][newCol] === '1') {
            coverIsland(grid, newRow, newCol);
        }
    }

}

var numIslands = function (grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    let result = 0;

    let [row, col] = [0, 0];

    // sequential traversing
    while (validCoordinates(row, col, grid)) {
        // land detected
        if (grid[row][col] === '1') {
            result++;
            coverIsland(grid, row, col);
        }

        if (col === grid[0].length - 1) {
            col = 0;
            row++;
        } else {
            col++;
        }
    }

    return result;
};


// 1
var grid0 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "0", "0", "0", "0"],
    ["0", "0", "1", "0", "1"]
]

//3
var grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(grid0));
console.log(numIslands(grid2));
console.log(numIslands([]));
console.log(numIslands([[]]));