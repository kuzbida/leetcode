/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	const l1 = nums1.length;
	if (l1 < m + n) {
		throw new Error('Too short!');
	}

	function shift(arr, idx) {
		const length = arr.length - 1;
		for (let j = length; j > idx; j--) {
			arr[j] = arr[j - 1];
		}
	}

	let n1Pointer = 0;

	for (let i = 0; i < n; i++) {
		const n2 = nums2[i];

		while (n1Pointer < (m + i) && nums1[n1Pointer] < n2) {
			n1Pointer++;
		}
		shift(nums1, n1Pointer);
		nums1[n1Pointer] = n2;
	}

	console.log('=======', nums1);
	return nums1;
};

console.time('merge');
merge([1, 2, 3, 6, 0, 0, 0], 4, [2, 5, 5], 3);
merge([0], 0, [1], 1);
merge([2, 0], 1, [1], 1);


merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3);
console.timeEnd('merge');

/*
*
* Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]*/

// [-1,0,0,1,2,2,3,3,3]
