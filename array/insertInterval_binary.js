/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

    const [start, end] = newInterval;

    let left = 0, right = intervals.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (start < intervals[mid][0]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    intervals.splice(left, 0, newInterval);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const resultLen = result.length - 1;
        const [prevStart, prevEnd] = result[resultLen];
        const [currentStart, currentEnd] = intervals[i];

        if (currentStart <= prevEnd) {
            result[resultLen][0] = Math.min(prevStart, currentStart);
            result[resultLen][1] = Math.max(prevEnd, currentEnd);
        } else {
            result.push(intervals[i]);
        }
    }


    return result;
};

console.log(insert([[1, 3], [6, 9]], [2, 5]), [[1, 5], [6, 9]])
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]), '\n', [[1, 2], [3, 10], [12, 16]])
console.log(insert([], [5, 7]))
console.log(insert([[1, 5]], [6, 8]))
console.log(insert([[1, 5]], [0, 0]))

/*
*
* Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
*/