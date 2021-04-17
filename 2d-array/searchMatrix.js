/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let targetRow;
    let targetCol;


    const colLength = matrix[0].length;
    let startRow = 0;
    let endRow = matrix.length - 1;
    while (startRow <= endRow) {
        const mid = Math.floor((startRow + endRow) / 2);
        if (matrix[mid][0] <= target && target <= matrix[mid][colLength - 1]) {
            targetRow = mid;
            break;
        } else if (target < matrix[mid][0]) {
            endRow = mid - 1;
        } else {
            startRow = mid + 1;
        }
    }

    if (targetRow === undefined) {
        return false;
    }

    let startCol = 0;
    let endCol = colLength - 1;

    while (startCol <= endCol) {
        const mid = Math.floor((startCol + endCol) / 2);
        if (matrix[targetRow][mid] === target) {
            targetCol = mid;
            break;
        } else if (target < matrix[targetRow][mid]) {
            endCol = mid - 1;
        } else {
            startCol = mid + 1;
        }
    }

    return targetCol !== undefined;
};

var matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3;

console.log(searchMatrix(matrix, target))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
console.log(searchMatrix([[1, 3, 5]], 1))