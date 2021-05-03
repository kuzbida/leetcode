/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    const LIS = new Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                LIS[i] = Math.max(LIS[i], 1 + LIS[j])
            }
        }
    }

    return Math.max(...LIS);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));
console.log(lengthOfLIS([7,7,7,7,7,7,7]));
console.log(lengthOfLIS([1]));
console.log(lengthOfLIS([10, 2, 4, 1]));
console.log(lengthOfLIS([5,7,-24,12,13,2,3,12,5,6,35]));

/*
* Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
* */