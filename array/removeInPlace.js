/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	function shift(arr, idx) {
		const l = arr.length;
		for (let i = idx; i < l; i++) {
			arr[i] = arr[i + 1];
		}
	}

	for (let j = 0; j < nums.length; j++) {
		if (nums[j] === val) {
			shift(nums, j);
			nums.length--;
			j--;
		}
	}

	console.log('nums', nums);
	return nums.length;
};

console.log(
		removeElement([3, 2, 2, 3], 3)
);

console.log(
		removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
);

console.log(
		removeElement([2, 2, 2, 2, 2, 2], 2)
);

/*
* Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.*/

/*
* Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
*/
