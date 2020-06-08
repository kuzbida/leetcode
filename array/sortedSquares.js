/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    if (!Array.isArray(A)) {
        return [];
    }

    return A
        .map((n) => Math.pow(n, 2))
        .sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
