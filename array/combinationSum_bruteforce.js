/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum_bruteforce = function (candidates, target) {
    let result = [];
    let set = new Set(candidates);

    for (let i = 0; i < candidates.length; i++) {
        const val = candidates[i];

        let count = Math.floor(target / val);

        while (count > 0) {
            const rest = target - (val * count);
            if (rest === 0) {
                result.push(new Array(count).fill(val))
            } else {
                if (set.has(rest) && rest !== val) {
                    const arr = new Array(count).fill(val);
                    arr.push(rest);
                    result.push(arr);
                }
            }
            count--;
        }
    }

    return result;
};

console.log(combinationSum_bruteforce([2, 3, 6, 7], 7))
console.log(combinationSum_bruteforce([2, 3, 5], 8))

/*
Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.


Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]


Example 3:

Input: candidates = [2], target = 1
Output: []


Example 4:

Input: candidates = [1], target = 1
Output: [[1]]
Example 5:

Input: candidates = [1], target = 2
Output: [[1,1]]
* */