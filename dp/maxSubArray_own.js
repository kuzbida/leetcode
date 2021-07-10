

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = nums[0];
    let max = nums[0];
    let current = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(dp + nums[i], nums[i]);
        max = Math.max(current, max);

        dp = current;
    }

    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6)
console.log(maxSubArray([4,-1,2,1]), 6)
console.log(maxSubArray([1]), 6)
console.log(maxSubArray([5,4,-1,7,8]), 23)
/*
*
* Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
* */