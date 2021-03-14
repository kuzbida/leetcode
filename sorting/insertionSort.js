function insertionSort(arr) {
    const l = arr.length;

    for (let i = 0; i < l; i++) {
        if (arr[i] < arr[0]) {
            // move item to the first position
            arr.unshift(arr.splice(i, 1)[0])
        } else {
            for (let j = 0; j < l; j++) {
                // figure out position for current item
                if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
                }
            }
        }
    }

    return arr;
}

console.log(insertionSort([
    99, 44, 6, 2, 1,
    5, 63, 87, 283, 4,
    0
]));