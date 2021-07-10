/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];

    function calculateSum(index, arr, accSum) {
        if (index > candidates.length) {
            return;
        }

        if (accSum === target) {
            result.push(arr);
            return;
        }
        const val = candidates[index];

        let count = Math.floor((target - accSum) / val);

        while (count > 0) {
            const rest = target - (val * count);
            if (rest === 0) {
                result.push([...arr, ...(new Array(count).fill(val))])
            }
            if (rest > 0) {
                calculateSum(index + 1, [...arr, ...(new Array(count).fill(val))], accSum + val * count)
            }
            count--;
        }

        if (accSum < target) {
            calculateSum(index + 1, arr, accSum)
        }
    }

    calculateSum(0, [], 0);

    return result;
};

console.log(combinationSum([2,3,5], 8))
console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2, 3, 5], 8))
console.log(combinationSum([2], 1))
console.log(combinationSum([1], 2))

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