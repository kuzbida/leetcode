/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	const length = nums.length;

	const set = new Set([...Array(length).keys()]);

	set.delete(0);

	for (let i = 0; i < length; i++) {
		set.delete(nums[i]);
	}

	return Array.from(set);
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
