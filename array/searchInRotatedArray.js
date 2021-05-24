/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let result = -1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            result = mid;
            break;
        }

        // left sorted portion
        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            // right sorted portion
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }


    return result;
};

/*
*
*
* Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
* */

console.log(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
console.log(search([1], 0), -1);
console.log(search([1], 1), 0);
console.log(search([1, 3], 0), -1);
console.log(search([1, 3], 3), 1);
console.log(search([5, 1, 3], 5), 0);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8), 4);