/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const result = [];

    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0, right = n;
    let top = 0, bottom = m;



    while (left < right && top < bottom) {
        for (let c = left; c < right; c++) {
            result.push(matrix[top][c])
        }

        top++;

        for (let r = top; r < bottom; r++) {
            result.push(matrix[r][right - 1]);
        }

        right--;

        if (!(left < right && top < bottom)) {
            break;
        }

        for (let c  = right -1; c >= left; c--) {
            result.push(matrix[bottom -1][c]);
        }

        bottom--;

        for (let r = bottom - 1; r >= top; r--) {
            result.push(matrix[r][left]);
        }

        left++;
    }


    return result;
};/*
var spiralOrder = function (matrix) {
    const result = [];

    const m = matrix.length;
    const n = matrix[0].length;

    const directionsList = ['right', 'bottom', 'left', 'top'];
    const directionsMap = {
        right: [0, 1],
        bottom: [1, 0],
        left: [0, -1],
        top: [-1, 0]
    };

    function traverse(r, c, offset, directionIdx, acc) {
        if (acc.length === m * n) {
            return acc;
        }

        acc.push(matrix[r][c]);

        if (
            r === offset && c === offset && r !== 0 && c !== 0 ||
            r === offset + 1 && c === offset ||
            r === offset && c === n - 1 - offset ||
            r === m - 1 - offset && c === n - 1 - offset ||
            r === m - 1 - offset && c === offset

        ) {
            if (directionIdx === 3) {
                directionIdx = 0;
                offset++;
            } else {
                directionIdx++;
            }
        }

        const [newR, newC] = [directionsMap[directionsList[directionIdx]][0] + r, directionsMap[directionsList[directionIdx]][1] + c];

        return traverse(newR, newC, offset, directionIdx, acc)

    }

    traverse(0, 0, 0, 0, result);


    return result;
};*/

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));


/*
* Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]
* */

/*
* Input: matrix =
* [
*   [1,2,3,4],
*   [5,6,7,8],
*   [9,10,11,12]
* ]
    Output: [
    1,2,3,4,
    8,12,11,10,9,5,6,7]
* */