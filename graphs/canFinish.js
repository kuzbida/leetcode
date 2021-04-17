/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// Time: O(prerequisites + n^3)
var canFinish = function (numCourses, prerequisites) {
    const adjacencyList = new Array(numCourses).fill(0).map(_ => []); // Time: O(n), Space: O(n)

    for (let i = 0; i < prerequisites.length; i++) { // Time: O(n)
        const [direction, vertex] = prerequisites[i];
        adjacencyList[vertex].push(direction);
    }

    for (let v = 0; v < numCourses; v++) { // Time O(n)
        const queue = [...adjacencyList[v]];
        const seen = {};

        while (queue.length) {
            const current = queue.shift();
            seen[current] = true;

            if (current === v) return false;
            const adjacent = adjacencyList[current];
            for (let i = 0; i < adjacent.length; i++) { // Time: O(n)
                const next = adjacent[i];
                if (!seen[next]) {
                    queue.push(next);
                }
            }
        }
    }

    return true;
};

var canFinishTopological = function (numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const adjList = inDegree.map(() => []);

    for (let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        inDegree[pair[0]]++;
        adjList[pair[1]].push(pair[0])
    }

    const stack = [];

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            stack.push(i);
        }
    }

    let count = 0;

    while (stack.length) {
        const current = stack.pop();
        count++;

        const adjacent = adjList[current];

        for (let i = 0; i < adjacent.length; i++) {
            const next = adjacent[i];
            inDegree[next]--;
            if (inDegree[next] === 0) {
                stack.push(next);
            }
        }
    }

    return count === numCourses;
};

// var numCourses = 6, prerequisites = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]];
//
// var numCourses = 2, prerequisites = [[1,0]];
// Output: true

// var numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
var numCourses = 20, prerequisites = [[0, 10], [3, 18], [5, 5], [6, 11], [11, 14], [13, 1], [15, 1], [17, 4]];

// console.log(canFinish(numCourses, prerequisites));
console.log(canFinishTopological(numCourses, prerequisites));

// Time: O(3n)
// Space: O(2n)