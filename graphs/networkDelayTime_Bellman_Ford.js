/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    const distances = new Array(n).fill(Infinity);
    distances[k - 1] = 0;

    for (let i = 0; i < n - 1; i++) {
        let count = 0;

        for (let j = 0; j < times.length; j++) {
            const [source, target, weight] = times[j];

            if (distances[target - 1] > distances[source - 1] + weight) {
                distances[target - 1] = distances[source - 1] + weight;
                count++;
            }
        }

        if (count === 0) break;
    }

    const answer = Math.max(...distances);

    return answer === Infinity ? -1 : answer;

};

var times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2;
// Output: 2

console.log(networkDelayTime(times, n, k));
// Input: times = [[1,2,1]], n = 2, k = 1

console.log(networkDelayTime([[1, 2, 1]], 2, 1));
console.log(networkDelayTime([[1, 2, 1]], 2, 2));
console.log(networkDelayTime([[1, 2, 1], [2, 1, 3]], 2, 2));