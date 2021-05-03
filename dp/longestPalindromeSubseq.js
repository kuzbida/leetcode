/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    if (s.length < 2) {
        return s.length;
    }

    let maxSubseq = 1;

    const matrix = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));

    for (let i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
    }

    for (let col = 0; col < s.length; col++) {
        for (let row = col - 1; row >= 0; row--) {
            // check case when don't have palindrome
            if (s[row] === s[col]) {
                const maxCurrentLen = matrix[row + 1][col - 1] + 2;
                matrix[row][col] = matrix[row + 1][col - 1] + 2;
                maxSubseq = Math.max(maxSubseq, maxCurrentLen);
            } else {
                matrix[row][col] = Math.max(matrix[row][col - 1], matrix[row + 1][col]);
            }
        }
    }

    // console.log(matrix);

    return maxSubseq;
};

/*
* Example 1:

Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
Example 2:

Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
*
* */

console.log(longestPalindromeSubseq("bbbab"))
console.log(longestPalindromeSubseq("cbbd"))
console.log(longestPalindromeSubseq("agbdba"))
console.log(longestPalindromeSubseq("euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew"))