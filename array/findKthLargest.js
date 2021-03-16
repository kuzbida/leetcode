function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        const partitionIdx = partition(array, left, right);
        quickSort(array, left, partitionIdx - 1);
        quickSort(array, partitionIdx + 1, right);
    }

}

function partition(array, left, right) {
    let pivotEl = array[right];
    let partitionIdx = left;
    for (let j = left; j < right; j++) {
        if (array[j] < pivotEl) {
            swap(array, partitionIdx, j);
            partitionIdx++;
        }
    }

    swap(array, partitionIdx, right);

    return partitionIdx;
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (nums.length === 1) {
        return nums[0];
    }
    quickSort(nums);

    return nums[nums.length - k];
};

console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log(findKthLargest([2,1], 1));
console.log(findKthLargest([3,1,2,4], 2));