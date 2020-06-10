/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
	/* Constrains
	1 <= arr.length <= 10^4
	1 <= arr[i] <= 10^5 */

	if (!Array.isArray(arr) || arr.length < 1 || arr.length > 10 ** 4) {
		return null;
	}

	const l = arr.length;
	let maximum = arr[l - 1];
	for (let i = l - 2; i >= 0; i--) {
		const current = arr[i];

		arr[i] = maximum;

		if (current > maximum) {
			maximum = current;
		}
	}

	arr[l - 1] = -1;

	return arr;
};

console.time('replaceElements');
console.log(replaceElements([17,18,5,4,6,1]));
console.timeEnd('replaceElements');

console.time('replaceElements');
console.log(replaceElements([9,2,5,1,1,10]));
console.timeEnd('replaceElements');

/*
*
* Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]*/
