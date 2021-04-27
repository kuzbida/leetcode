const DIRECTIONS = [
    [2, -1], // top, left
    [2, 1], // top, right

    [1, 2], // right, top
    [-1, 2], // right, bottom

    [-2, 1], // bottom, right
    [-2, -1], // bottom, left

    [-1, -2], // left, bottom
    [1, -2], // left, top
];

/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function (N, K, r, c) {
    const dp = new Array(K + 1).fill(0)
        .map(() => new Array(N).fill(0).map(() => new Array(N).fill(0).map(() => undefined)));

    return recursion(N, K, r, c, dp);
};

function recursion(N, K, r, c, dp) {
    if (r < 0 || c < 0 || r >= N || c >= N) {
        return 0;
    }

    if (K === 0) {
        return 1;
    }

    if (dp[K][r][c] !== undefined) return dp[K][r][c];

    let res = 0;

    for (let dir of DIRECTIONS) {
        res += recursion(N, K - 1, r + dir[0], c + dir[1], dp) / 8;
    }

    dp[K][r][c] = res;

    return res;
}


/*
* Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.
* */

console.log('knightProbability', knightProbability(3, 2, 0, 0));