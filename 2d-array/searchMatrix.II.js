/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rowsToCheck = [];
    const length = matrix[0].length;
    let targetRow, targetCol;

    for (let i = 0; i < matrix.length; i++) {
        if (target >= matrix[i][0] && target <= matrix[i][length - 1]) {
            rowsToCheck.push(i);
        }
        if (target < matrix[i][0]) {
            break;
        }
    }


    for (let row of rowsToCheck) {

        let l = 0, r = length;

        while (l <= r) {
            const mid = Math.floor((r + l) / 2);

            if (target === matrix[row][mid]) {
                console.log('Target founded: ', row, mid);
                targetRow = row;
                targetCol = mid;
                break;
            } else if (target < matrix[row][mid]) {
                r = mid - 1;
            } else if (target > matrix[row][mid]) {
                l = mid + 1;
            } else {
                break;
            }
        }

        if (targetRow !== undefined && targetCol !== undefined) {
            break;
        }
    }

    console.log([targetRow, targetCol]);


    return targetRow !== undefined && targetCol !== undefined;
};


console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5))
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20))
console.log(searchMatrix([[-5]], -5))

/*
*
* Example 1:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true


Example 2:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
* */