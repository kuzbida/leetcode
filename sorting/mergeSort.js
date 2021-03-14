const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left

    const middle = Math.ceil(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let p1 = 0;
    let p2 = 0;
    const result = [];
    while (p1 < left.length && p2 < right.length) {

        if (left[p1] < right[p2]) {
            result.push(left[p1]);
            p1++;
        } else {
            result.push(right[p2]);
            p2++;
        }
    }

    return result.concat(left.slice(p1)).concat(right.slice(p2));
}
/* function merge(left, right) {
    let p1 = 0;
    let p2 = 0;
    const result = [];
    while (p1 < left.length || p2 < right.length) {
        if (left[p1] === undefined) {
            result.push(right[p2]);
            p2++;
            continue;
        }

        if (right[p2] === undefined) {
            result.push(left[p1]);
            p1++;
            continue;
        }

        if (left[p1] < right[p2]) {
            result.push(left[p1]);
            p1++;
        } else {
            result.push(right[p2]);
            p2++;
        }
    }

    return result;
}
*/


const answer = mergeSort(numbers);
console.log(answer);