/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	function shift(arr, start, offset) {
		for (let i = start; i < arr.length; i++) {
			arr[i] = arr[i + offset];
		}
	}

	for (let j = 0; j < nums.length; j++) {
		let offset = 1;
		if (nums[j] === nums[j + offset]) {
			while (nums[j] === nums[j + 1 + offset]) {
				offset++;
			}

			shift(nums, j, offset);

			nums.length = nums.length - offset;
			j--;
		}
	}

	console.log('nums ====', nums);
	return nums.length;

};

console.time('removeDuplicates: 1');
removeDuplicates([1, 1, 2]);
console.timeEnd('removeDuplicates: 1');

console.log('===========');
console.time('removeDuplicates: 2');
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6]);
console.timeEnd('removeDuplicates: 2');

var removeDuplicates1 = function (nums) {
	function shift(arr, start) {
		for (let i = start; i < arr.length; i++) {
			arr[i] = arr[i + 1];
		}
	}

	for (let j = 0; j < nums.length; j++) {
		if (nums[j] === nums[j + 1]) {
			shift(nums, j);
			nums.length--;
			j--;
		}
	}

	console.log('nums ====', nums);
	return nums.length;

};

console.time('+++ removeDuplicates: 1');
removeDuplicates1([1, 1, 2]);
console.timeEnd('+++ removeDuplicates: 1');

console.log('===========');
console.time('+++ removeDuplicates: 2');
removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6]);
console.timeEnd('+++ removeDuplicates: 2');
console.time('+++ removeDuplicates: 3');
removeDuplicates1([-1, -1, -1]);
console.timeEnd('+++ removeDuplicates: 3');
