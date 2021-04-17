function bfs(graph) {
    const result = [];
    const queue = [];
    const seen = {};

    queue.push(0);

    while (queue.length > 0) {
        const vertex = queue.shift();

        if (!seen[vertex]) {
            seen[vertex] = true;
            result.push(vertex);
            queue.push(...graph[vertex])
        }
    }

    return result;
}

const adjacencyList = [
    [1, 3], // 0
    [0], // 1
    [3, 8], // 2
    [0, 2, 4, 5], // 3
    [3, 6], // 4
    [3], // 5
    [4, 7], // 6
    [6], // 7
    [2], // 8
]

console.log('bfs', bfs(adjacencyList));


const adjacencyMatrix = [
    [0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

const traversalBFS = function(graph) {
    const seen = {};
    const queue = [0];
    const values = [];

    while(queue.length) {
        const vertex = queue.shift();

        values.push(vertex);
        seen[vertex] = true;

        const connections = graph[vertex];
        for(let v = 0; v < connections.length; v++) {
            if(connections[v] > 0 && !seen[v]) {
                queue.push(v);
            }
        }
    }

    return values;
}

console.log(traversalBFS(adjacencyMatrix));