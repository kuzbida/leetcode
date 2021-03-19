function startEndOfTarget(arr, target) {
    let start = -1, end = -1;
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midVal = arr[mid];
        if (midVal === target) {
            if (arr[mid - 1] !== target) {
                start = mid;
                if (end !== -1) {
                    break;
                } else {
                    left = mid;
                }
            } else {
                if (left > 0) {
                    left--;
                }
            }
            if (arr[mid + 1] !== target) {
                end = mid;
                if (start !== -1) {
                    break;
                } else {
                    right = mid;
                }
            } else {
                if (right < arr.length - 1) {
                    right++;
                }
            }
        } else if (target < midVal) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return [start, end];
}

console.log(startEndOfTarget([1, 3, 3, 5, 5, 5, 8, 9], 5), [3, 5]);
console.log(startEndOfTarget([1, 2, 3, 4, 5, 6], 4), [3, 3]);
console.log(startEndOfTarget([1, 2, 3, 4, 5], 9), [-1, -1]);
console.log(startEndOfTarget([], 3), [-1, -1]);