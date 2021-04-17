function traverse(graph, vertex, seen, result) {

    result.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];

    for (let i = 0; i < connections.length; i++) {
        const connection = connections[i];
        if (!seen[connection]) {
            traverse(graph, connection, seen, result)
        }
    }

}

function dfs(graph) {
    const result = [];

    traverse(graph, 0, {}, result);

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

console.log('dfs', dfs(adjacencyList));



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

const traversalDFS = function(vertex, graph, values, seen) {
    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for(let v = 0; v < connections.length; v++) {
        if(connections[v] > 0 && !seen[v]) {
            traversalDFS(v, graph, values, seen);
        }
    }
}

const values = [];
traversalDFS(0, adjacencyMatrix, values, {})

console.log(values);