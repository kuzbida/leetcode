/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
	const length = arr.length;
	console.log('length', length);

	function shift(arr, idx) {
		for (let j = length - 1; j > idx; j--) {
			arr[j] = arr[j - 1];
		}
	}

	for (let i = 0; i < length; i++) {
		if (arr[i] === 0) {
			shift(arr, i);
			if ((i + 1) < length) {
				arr[i + 1] = 0;
				i++;
			}
		}
	}

	console.log('result', arr);
	console.log('result.length', arr.length);
};

/*Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]*/

console.time('duplicateZeros');
duplicateZeros([0, 0, 0, 0, 0, 0, 0]);
console.timeEnd('duplicateZeros');
