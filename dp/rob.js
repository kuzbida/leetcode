/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp1 = 0, dp2 = 0;

    for (let i = 0; i < nums.length; i++) {
        const temp = Math.max(nums[i] + dp1, dp2);
        dp1 = dp2;
        dp2 = temp;
    }

    return dp2;
};

/*
*
* Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
* */

console.log(rob([1, 2, 3, 1]) === 4)
console.log(rob([2, 7, 9, 3, 1]) === 12)
console.log(rob([7, 2, 1, 9, 3, 1]) === 17)