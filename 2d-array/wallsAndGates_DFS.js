const INF = 2147483647;

const testMatrix = [
    [INF, -1, 0, INF],
    [INF, INF, INF, 0],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]
];

const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
]

function isValidCoordinate(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

function dfs(matrix, row, col, stepsDone, seen) {
    if (!isValidCoordinate(matrix, row, col)) {
        return;
    }

    for (let i = 0; i < directions.length; i++) {
        const newRow = row + directions[i][0];
        const newCol = col + directions[i][1];
        if (!isValidCoordinate(matrix, newRow, newCol) || seen[newRow][newCol]) {
            continue;
        }
        seen[newRow][newCol] = true;
        const val = matrix[newRow][newCol];
        if (val !== 0 && val !== -1) {
            matrix[newRow][newCol] = Math.min(stepsDone, val);
            dfs(matrix, newRow, newCol, stepsDone + 1, seen);
        }
    }
}

function wallsAndGates_DFS(matrix) {
    if (matrix.length === 0) {
        return matrix;
    }

    let row = 0, col = 0;

    while (isValidCoordinate(matrix, row, col)) {
        const value = matrix[row][col];

        if (value === 0) {
            const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

            dfs(matrix, row, col, 1, seen);
        }

        if (col === matrix[0].length - 1) {
            col = 0;
            row++;
        } else {
            col++;
        }
    }

    return matrix;
}

console.log('wallsAndGates', wallsAndGates_DFS(testMatrix));