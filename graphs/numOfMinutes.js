/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numberOfMinutes = function (n, headID, manager, informTime) {
    let result = 0;

    const adjacencyList = new Array(n).fill(0).map(item => [] );
    for (let i = 0; i < manager.length; i++) {
        if (manager[i] === -1) continue;

        adjacencyList[manager[i]].push(i);
    }

    console.log('adjacencyList', adjacencyList);

    function traverse(level, acc) {
        if (adjacencyList[level].length === 0) {
            result = Math.max(result, acc);
            // return;
        } else {
            for (let i = 0; i < adjacencyList[level].length; i++) {
                const vertex = adjacencyList[level][i];
                if (informTime[vertex] === 0) {
                    result = Math.max(result, acc);
                } else {
                    traverse(vertex, acc + informTime[vertex]);
                }
            }
        }
    }

    traverse(headID, informTime[headID]);

    return result;
};

var n = 11, headID = 4, manager = [5, 9, 6, 10, -1, 8, 9, 1, 9, 3, 4],
    informTime = [0, 213, 0, 253, 686, 170, 975, 0, 261, 309, 337];
//
// var n = 7, headID = 6, manager = [1, 2, 3, 4, 5, 6, -1], informTime = [0, 6, 5, 4, 3, 2, 1]
// Output: 21

// var n = 4, headID = 2, manager = [3,3,-1,2], informTime = [0,0,162,914]
// Output: 1076

// var n = 15, headID = 0, manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
//     informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
// Output: 3

// var n = 6, headID = 2, manager = [2, 2, -1, 2, 2, 2], informTime = [0, 0, 1, 0, 0, 0]
// Output: 1
// Explanation: The head of the company with id = 2 is the direct manager of all the employees in the company and needs 1 minute to inform them all.
//     The tree structure of the employees in the company is shown.

console.log(numberOfMinutes(n, headID, manager, informTime));