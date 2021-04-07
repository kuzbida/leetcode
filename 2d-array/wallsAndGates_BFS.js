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

function bfs(matrix, queue) {
    let stepsDone = 1;
    let currentQueueLength = queue.length;
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

    while (queue.length > 0) {
        const [row, col] = queue.shift();
        currentQueueLength--;


        for (let i = 0; i < directions.length; i++) {
            const newRow = row + directions[i][0];
            const newCol = col + directions[i][1];
            if (newRow < 0 || newCol < 0 || newRow >= matrix.length || newCol >= matrix[0].length || seen[newRow][newCol]) {
                continue;
            }
            seen[newRow][newCol] = true;
            const val = matrix[newRow][newCol];
            if (val !== 0 && val !== -1) {
                matrix[newRow][newCol] = Math.min(stepsDone, val);
                queue.push([newRow, newCol])
            }
        }

        if (currentQueueLength === 0) {
            currentQueueLength = queue.length;
            stepsDone++;
        }



    }

}

function wallsAndGates(matrix) {
    if (matrix.length === 0) {
        return matrix;
    }

    let row = 0, col = 0;

    while (isValidCoordinate(matrix, row, col)) {
        const value = matrix[row][col];

        if (value === 0) {
            bfs(matrix, [[row, col]]);
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

console.log('wallsAndGates', wallsAndGates(testMatrix));