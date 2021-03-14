function selectionSort(arr) {
    const l = arr.length;

    for (let i = 0; i < l; i++) {
        let pointer = i;
        let temp = arr[i];
        for (let j = i + 1; j < l; j++) {
            if (arr[j] < arr[pointer]) {
                // update pointer when current value is smaller to previous minimum
                pointer = j;
            }
        }

        arr[i] = arr[pointer];
        arr[pointer] = temp;
    }

    return arr;
}

console.log(selectionSort([
    99, 44, 6, 2, 1,
    5, 63, 87, 283, 4,
    0
]));