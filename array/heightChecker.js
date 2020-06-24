/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {

	if (!Array.isArray(heights)) {
		return 0;
	}

	let counter = 0;
	const sorted = [...heights].sort((a, b) => a - b);
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] !== heights[i]) {
			counter++;
		}
	}

	return counter;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
console.log(heightChecker([1, 2, 3, 4, 5]));

/*
* Current array : [1,1,4,2,1,3]
Target array  : [1,1,1,2,3,4]
* */

/*
* Input: heights = [5,1,2,3,4]
Output: 5
* */

/*
* Input: heights = [1,2,3,4,5]
* Output: 0
* */
