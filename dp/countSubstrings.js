/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    if (s.length < 2) {
        return s.length;
    }

    let result = 0;

    const matrix = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));


    for (let i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
        result++;
    }

    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            if (row === col - 1 && s[col] === s[row]) {
                matrix[row][col] = 1;
                result++;
                //    check whether inner substring is palindrome
            } else if (matrix[row + 1][col - 1] === 1 && s[row] === s[col]) {
                matrix[row][col] = 1;
                result++;
            }
        }
    }

    return result;
};

/*
* Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".


Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

* */

console.log(countSubstrings("abc") === 3);
console.log(countSubstrings("aaa") === 6);
console.log(countSubstrings("aaba") === 6);