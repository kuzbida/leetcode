/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const queue = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                queue.push([row, col])
            }
        }
    }

    while (queue.length > 0) {
        const [row, col] = queue.shift();
        for (let i = 0; i < matrix[row].length; i++) {
            matrix[row][i] = 0;
        }
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][col] = 0;
        }
    }
};


var matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
console.log("Output: [ [ 1,0,1 ], [ 0,0,0 ], [ 1,0,1 ] ]")
setZeroes(matrix)
console.log('setZeroes', matrix)