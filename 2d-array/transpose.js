/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    const transposedMatrix = new Array(matrix[0].length);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (!transposedMatrix[col]) {
                transposedMatrix[col] = [];
            }
            transposedMatrix[col][row] = matrix[row][col]
        }
    }

    return transposedMatrix;

};


var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
var matrix2 = [[1, 2, 3], [4, 5, 6]];
// Output:

// Output: [[1,4,7],[2,5,8],[3,6,9]]
console.log('[[1,4,7],[2,5,8],[3,6,9]]', transpose(matrix));
console.log('[ [ 1, 4, 7, 10 ], [ 2, 5, 8, 11 ], [ 3, 6, 9, 12 ] ]', transpose(matrix1));
console.log('[[1,4],[2,5],[3,6]]', transpose(matrix2));