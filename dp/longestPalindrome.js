/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s[0];
    }

    const matrix = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));

    for (let i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
    }

    let result = s[0];

    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            if (row === col - 1 && s[col] === s[row]) {
                matrix[row][col] = 2;
                //    check whether inner substring is palindrome
            } else if (matrix[row + 1][col - 1] > 0 && s[row] === s[col]) {
                const prev = matrix[row + 1][col - 1];
                matrix[row][col] = prev + 2;

            }
            if (matrix[row][col] > result.length) {
                result = s.substring(row, col + 1);
            }
        }
    }

    // console.log(matrix)

    return result;
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome("ac"))
console.log(longestPalindrome("acc"))
console.log(longestPalindrome("bb"))


/*
*Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.


Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
*
* */