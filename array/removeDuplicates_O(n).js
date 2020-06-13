/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
	if (!nums || !Array.isArray(nums)) {
		return 0;
	}

	const length = nums.length;
	let counter = 0;
	let pointer = 1;
	let prev = nums[0];

	for (let j = 1; j < length; j++) {
		if (prev === nums[j]) {
			counter++;
		} else {
			nums[pointer] = nums[j];
			prev = nums[pointer];
			pointer++;
		}
	}

	nums.length = nums.length - counter;

	return nums.length;
};

console.time('removeDuplicates: 1');
removeDuplicates([1, 1, 2]);
console.timeEnd('removeDuplicates: 1');

console.log('===========');
console.time('removeDuplicates: 2');
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6]);
console.timeEnd('removeDuplicates: 2');
console.time('removeDuplicates: 3');
removeDuplicates([-1, -1, -1]);
console.timeEnd('removeDuplicates: 3');
