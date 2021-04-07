/**
 * @param {number[][]} grid
 * @return {number}
 */
function isValidCoordinate(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

const normal = 1;
const rotten = 2;

const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

var orangesRotting = function (grid) {
    if (grid.length === 0) {
        return 0;
    }

    let result = 0;
    let freshOranges = 0;

    let row = 0;
    let col = 0;
    let queue = [];

    // find rotten oranges
    while (isValidCoordinate(grid, row, col)) {
        if (grid[row][col] === rotten) {
            queue.push([row, col]);
        }

        if (grid[row][col] === normal) {
            freshOranges++;
        }

        if (col === grid[0].length - 1) {
            row++;
            col = 0;
        } else {
            col++;
        }

    }

    if (freshOranges === 0) {
        return 0;
    }

    if (queue.length === 0 && freshOranges > 0) {
        return -1;
    }

    function rec(arr) {
        const temp = [];
        while (arr.length > 0) {
            const [rottenRow, rottenCol] = arr.shift();

            for (let i = 0; i < directions.length; i++) {
                const newRow = rottenRow + directions[i][0];
                const newCol = rottenCol + directions[i][1];

                if (isValidCoordinate(grid, newRow, newCol) && grid[newRow][newCol] === normal) {
                    grid[newRow][newCol] = rotten;
                    temp.push([newRow, newCol]);
                    freshOranges--;
                }
            }
        }

        if (temp.length > 0) {
            result++;

            rec(temp);
        }
    }

    rec(queue);


    return freshOranges > 0 ? -1 : result;

};


// Output: 4
var grid0 = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]

// Output: -1
var grid1 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]


// Output: 0
var grid2 = [[0, 2]]

console.log('4', orangesRotting(grid0));
console.log('-1', orangesRotting(grid1));
console.log('0', orangesRotting(grid2));
