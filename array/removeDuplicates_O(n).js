/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
	const length = nums.length;
	let unique;
	let counter = 0;

	for (let j = 0; j < length; j++) {

		let pointer = j + 1;

		while (nums[j] === nums[pointer] && pointer < length) {
			pointer++;
			counter++;
		}

		unique = nums[pointer];

		//nums[j] = unique;

		while (pointer > j) {
			nums[pointer] = unique;
			pointer--;
		}
	}

	//nums.length = nums.length - counter;

	console.log('nums ====', nums);
	console.log('counter ====', counter);
	return nums.length;

};


console.log('===========');
console.time('+++ removeDuplicates: 2');
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6]);
console.timeEnd('+++ removeDuplicates: 2');
//console.time('+++ removeDuplicates: 3');
//removeDuplicates([-1, -1, -1]);
//console.timeEnd('+++ removeDuplicates: 3');
