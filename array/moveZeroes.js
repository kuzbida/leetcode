/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	const length = nums.length;

	if (length > 1) {
		let writePointer = 0;
		let counter = 0;
		for (let readPointer = 0; readPointer < length; readPointer++) {
			if (nums[readPointer] === 0) {
				counter++;
			} else {
				if (counter) {
					nums[writePointer] = nums[readPointer];
					nums[readPointer] = 0;
				}
				writePointer++;
			}

		}
	}
	console.log('nums', nums);

};
/*var moveZeroes = function (nums) {
	var idx = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[idx] = nums[i];
			nums[i] = idx === i ? nums[i] : 0;
			idx++;
		}
	}
	console.log('nums', nums);

};*/
/*
*
* Input: [0,1,0,3,12]
Output: [1,3,12,0,0]*/

console.time('moveZeroes');
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.timeEnd('moveZeroes');
console.log('============');
console.time('moveZeroes');
console.log(moveZeroes([0, 0, 1]));
console.timeEnd('moveZeroes');
console.log('============');
console.time('moveZeroes');
console.log(moveZeroes([1]));
console.timeEnd('moveZeroes');
console.log('============');
console.time('moveZeroes');
console.log(moveZeroes([1, 0]));
console.timeEnd('moveZeroes');
console.log('============');
console.time('moveZeroes');
console.log(moveZeroes([1, 0, 0, 1]));
console.timeEnd('moveZeroes');
console.log('============');
console.time('moveZeroes');
console.log(moveZeroes([2, 1]));
console.timeEnd('moveZeroes');
