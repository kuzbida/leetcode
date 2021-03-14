function bubleSort(arr) {
    while (true) {
        let anyChange = true;

        for (let i = 0; i < arr.length - 1; i++) {
            const a = arr[i], b = arr[i + 1];
            if (a > b) {
                anyChange = false;
                arr[i] = b;
                arr[i + 1] = a;
            }

        }

        if (anyChange) {
           break;
        }
    }

    return arr;
}

console.log(bubleSort([
    99, 44, 6, 2, 1,
    5, 63, 87, 283, 4,
    0
]));