function binarySearchRecursion(nums, target) {

    function helper(nums, start, end, target) {
        const mid = Math.floor((end + start) / 2);

        if ((end - start) < 2) {
            if (nums[start] === target) {
                return start;
            } else if (nums[end] === target) {
                return end;
            } else {
                return -1;
            }
        }

        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            return helper(nums, start, mid, target);
        } else {
            return helper(nums, mid, end, target);
        }
    }


    return helper(nums, 0, nums.length - 1, target);
}

function binarySearch(nums, target) {

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const val = nums[mid];

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

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(binarySearch([-1,0,3,5,9,12], 2));