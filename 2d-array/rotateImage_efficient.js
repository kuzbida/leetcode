/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    let left = 0,
        right = matrix.length - 1;

    while (left < right) {

        for (let i = 0; i < right - left; i++) {
            let top = left,
                bottom = right;

            const topLeft = matrix[top][left + i];

            // move bottom left to top left
            matrix[top][left + i] = matrix[bottom - i][left];

            // move bottom right to bottom left
            matrix[bottom - i][left] = matrix[bottom][right - i];

            // move top right to bottom right
            matrix[bottom][right - i] = matrix[top + i][right];

            matrix[top + i][right] = topLeft;
        }

        left++;
        right--;

    }

};

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// let matrix = [[1]];
// let matrix = [[1,2], [3,4]];
let matrix = [
    [2,29,20,26,16,28],
    [12,27,9,25,13,21],
    [32,33,32,2,28,14],
    [13,14,32,27,22,26],
    [33,1,20,7,21,7],
    [4,24,1,6,32,34]];

rotate(matrix);

console.log(matrix);

/*
* Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]


Input: matrix = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
]
Output: [
    [15,13,2,5],
    [14,3,4,1],
    [12,6,8,9],
    [16,7,10,11]
]

Input: matrix = [[1]]
Output: [[1]]

Input: matrix = [
    [1,2],
    [3,4]
]
Output: [
    [3,1],
    [4,2]
]


[
    [2,29,20,26,16,28],
    [12,27,9,25,13,21],
    [32,33,32,2,28,14],
    [13,14,32,27,22,26],
    [33,1,20,7,21,7],
    [4,24,1,6,32,34]
]

[
    [4,33,13,32,12,2],
    [24,1,14,33,27,29],
    [1,20,32,32,9,20],
    [6,7,27,2,25,26],
    [32,21,22,28,13,16],
    [34,7,26,14,21,28]
]


* */