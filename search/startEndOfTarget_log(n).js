function binarySearch(arr, left, right, target) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const val = arr[mid];

        if (val === target) {
            return mid;
        } else if (val < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }


    return -1;
}

function startEndOfTarget(arr, target) {
    if (arr.length === 0) return [-1, -1];

    const firstFound = binarySearch(arr, 0, arr.length - 1, target);

    if (firstFound === -1) return [-1, -1];

    let leftResult = firstFound,
        rightResult = firstFound;

    let tempL, tempR;

    while (leftResult !== -1) {
        tempL = leftResult;
        leftResult = binarySearch(arr, 0, leftResult - 1, target);
    }

    leftResult = tempL;

    while (rightResult !== -1) {
        tempR = rightResult;
        rightResult = binarySearch(arr, rightResult + 1, arr.length - 1, target);
    }

    rightResult = tempL;


    return [leftResult, rightResult];
}

console.log(startEndOfTarget([1, 3, 3, 5, 5, 5, 8, 9], 5), [3, 5]);
console.log(startEndOfTarget([1, 2, 3, 4, 5, 6], 4), [3, 3]);
console.log(startEndOfTarget([1, 2, 3, 4, 5], 9), [-1, -1]);
console.log(startEndOfTarget([], 3), [-1, -1]);