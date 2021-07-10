/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*var uniquePaths = function(m, n) {
    const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

    function traverse(row, col) {
        matrix[row][col] += 1;
        if ((row + 1) < m) {
            traverse(row + 1, col);
        }
        if ((col + 1) < n) {
            traverse(row, col + 1);
        }
    }

    traverse(0, 0);

    return matrix[m - 1][n - 1];
};*/
var uniquePaths = function (m, n) {
    const matrix = [];

    for (let i = 0; i < m; i++) {
        const temp = [];
        for (let j = 0; j < n; j++) {
            if (j === n - 1 || i === m - 1) {
                temp.push(1)
            } else {
                temp.push(null);
            }
        }
        matrix.push(temp);
    }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            matrix[i][j] = matrix[i + 1][j] + matrix[i][j + 1];
        }
    }

    return matrix[0][0];
};

console.log(uniquePaths(3, 7));
// console.log(uniquePaths(3, 2));
// console.log(uniquePaths(7, 3));
// console.log(uniquePaths(3, 3));
// console.log(uniquePaths(1, 1));
// console.log(uniquePaths(19, 13));
// console.log(uniquePaths(100, 100));

/*
*
* Example 1:
Input: m = 3, n = 7
Output: 28


Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down


Example 3:

Input: m = 7, n = 3
Output: 28


Example 4:

Input: m = 3, n = 3
Output: 6
* */