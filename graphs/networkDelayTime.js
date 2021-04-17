/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    const adjacencyList = {};
    const delayMap = new Array(n).fill(0).map(() => Number.MAX_SAFE_INTEGER);

    for (let i = 0; i < times.length; i++) {
        const [source, target, time] = times[i];
        if (!adjacencyList[source]) {
            adjacencyList[source] = [];
        }
        adjacencyList[source].push([target, time]);
    }

    function traverse(source, delay, seen) {
        if (seen[source] && delay === delayMap[source - 1]) {
            return;
        }
        delayMap[source - 1] = Math.min(delayMap[source - 1], delay);
        seen[source] = true;

        const adjacencies = adjacencyList[source];

        if (!adjacencies) {
            return;
        }
        for (let v = 0; v < adjacencies.length; v++) {
            const [target, time] = adjacencies[v];
            traverse(target, delay + time, {...seen})
        }
    }


    traverse(k, 0, {});

    let result = 0;

    for (let i = 0; i < delayMap.length; i++) {
        if (delayMap[i] === Number.MAX_SAFE_INTEGER) {
            return -1;
        } else {
            result = Math.max(delayMap[i], result);
        }
    }

    return result;
};

var times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2;
// Output: 2

console.log(networkDelayTime(times, n, k));
// Input: times = [[1,2,1]], n = 2, k = 1

console.log(networkDelayTime([[1, 2, 1]], 2, 1));
console.log(networkDelayTime([[1, 2, 1]], 2, 2));
console.log(networkDelayTime([[1, 2, 1], [2, 1, 3]], 2, 2));