/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    const length = matrix.length;
    const rotated = new Array(length).fill(0).map(() => new Array(length).fill(false));

    const directions = ['right', 'bottom', 'left', 'top'];
    const coordinates = {
        left: [0, -1],
        right: [0, 1],
        bottom: [1, 0],
        top: [-1, 0],
    };

    function changeValues(val, row, col, directionIdx, delta) {

        let newRow = row;
        let newCol = col;

        for (let p = delta; p < length - 1 - delta; p++) {
            if (
                newRow === delta && newCol === delta && directionIdx !== 0 ||
                newRow === delta && newCol === length - 1 - delta ||
                newRow === length - 1 - delta && newCol === length - 1 - delta ||
                newRow === length - 1 - delta && newCol === delta
            ) {
                directionIdx++;
            }
            directionIdx = directionIdx === 4 ? 0 : directionIdx;

            let [r, c] = coordinates[directions[directionIdx]];

            newRow = newRow + r;
            newCol = newCol + c;
        }

        // console.log('newRow', newRow);
        // console.log('newCol', newCol);
        // console.log('rotated', rotated);
        // console.log('=================');


        if (newRow < length && newCol < length && !rotated[newRow][newCol]) {
            const nextVal = matrix[newRow][newCol];
            matrix[newRow][newCol] = val;
            rotated[newRow][newCol] = true;
            changeValues(nextVal, newRow, newCol, directionIdx, delta);
        }
    }


    for (let row = 0; row < length; row++) {
        const delta = row < Math.ceil((length - 1) / 2) ? row : Math.abs(row - (length - 1));
        // console.log('/////////////////')
        // console.log('row', row);
        // console.log('delta', delta);
        // console.log('/////////////////')

        for (let col = row; col < length; col++) {
            if (rotated[row][col]) {
                continue;
            }


            changeValues(matrix[row][col], row, col, 0, delta);
        }
    }


};

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// let matrix = [[1]];
let matrix = [[1,2], [3,4]];
let matrix = [[1,2], [3,4]];

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


* */