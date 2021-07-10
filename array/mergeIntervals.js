/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    const sorted = intervals.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return 0;
        }
    });

    const result = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const [curresntStart, currentEnd] = sorted[i];
        const [, prevEnd] = result[result.length - 1];

        if (curresntStart <= prevEnd && currentEnd > prevEnd) {
            result[result.length - 1][1] = currentEnd;
        } else if (currentEnd <= prevEnd) {
            // continue;
        } else {
            result.push(sorted[i]);
        }

    }
    return result;
};


console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), '===', [[1,6],[8,10],[15,18]])
console.log(merge([[1,4],[1,5]]), '===', [1,5])
console.log(merge([[3, 4],[1,3]]), '===', [1,4])
console.log(merge([[1, 4],[2,3]]), '===', [1,4])
console.log(merge([[1,4],[0,0]]), '===', [[0,0],[1,4]])
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]), '===', [[1, 10]])

/*
* Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*
* */