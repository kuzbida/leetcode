/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*var productExceptSelf = function (nums) {
	const answer = [];
	for (let i = 0; i < nums.length; i++) {
		const productWithoutZero = nums.reduce((acc, val, idx) => {
			if (idx === i) {
				return acc;
			}

			return acc * val;

		}, 1);

		answer.push(productWithoutZero)
	}

	return answer;
};*/

var productExceptSelf = function (nums) {
    let pointer = nums.length - 1;
    const dp = {};
    dp[pointer] = nums[pointer];
    pointer--;
    while (pointer >= 0) {
        dp[pointer] = nums[pointer] === 0 || dp[pointer + 1] === 0 ?
            0 :
            nums[pointer] * dp[pointer + 1];
        pointer--;
    }

    // console.log('dp', dp);

    const answer = [];
    let productBefore = nums[0];

    answer.push(dp[1]);

    pointer = 1;

    while (pointer < nums.length - 1) {
        const nextVal = dp[pointer + 1];
        answer[pointer] = productBefore === 0 || nextVal === 0 ? 0 : productBefore * nextVal;
        productBefore = productBefore === 0 || nums[pointer] === 0 ? 0 : productBefore * nums[pointer];
        pointer++;
    }

    answer.push(productBefore);

    return answer;
};

/*
*Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
* */

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// [12,16,24,48,24]
console.log(productExceptSelf([4,3,2,1,2]));
