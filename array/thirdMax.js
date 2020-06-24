/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
	if (nums.length < 3) {
		return Math.max(...nums);
	}
	let u = new Set(nums);
	if (u.size < 3) {
		return Math.max(...u);
	}

	for (let i = 0; i < 2; i++) {
		u.delete(Math.max(...u));
	}

	return Math.max(...u);
};
/*var thirdMax = function (nums) {

	if (!Array.isArray(nums)) {
		return 0;
	}

	if (nums.length < 3) {
		return nums[nums.length - 1];
	}

	const unique = new Set(nums);

	const uniqueArray = Array.from(unique);

	if (uniqueArray.length < 3) {
		return uniqueArray[uniqueArray.length - 1];
	}

	const sorted = uniqueArray.sort((a, b) => b - a);

	return sorted[2];
};*/

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([1]));
console.log(thirdMax([1, 1, 1, 4, 4, 2, 7]));
console.log(thirdMax([1, 1, 2]));

/*
* Input: [3, 2, 1]
	Output: 1
* */

/*
* Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.*/

/*
* Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
* */
