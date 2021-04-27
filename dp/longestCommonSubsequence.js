/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const DP = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))
    console.log('DP', DP);

    // we're using reversed loop to move from bottom right to top left
    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            // if characters match we're taking value from diagonal and adding +1
            if (text1[i] === text2[j]) {
                DP[i][j] = 1 + DP[i + 1][j + 1];
            } else {
                // if characters don't match we're taking maximum value from right and bottom
                DP[i][j] = Math.max(DP[i][j + 1], DP[i + 1][j])
            }
        }
    }

    console.log('DP', DP);
    return DP[0][0]
};

console.log(longestCommonSubsequence("abcde", "ace") === 3);
console.log(longestCommonSubsequence("abc", "abc") === 3);
console.log(longestCommonSubsequence("abc", "def") === 0);

/*
* Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
* */