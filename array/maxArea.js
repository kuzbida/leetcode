/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaBruteForce = function (height) {
	let maxArea = 0;
	for (let p1 = 0; p1 < height.length; p1++) {
		for (let p2 = p1 + 1; p2 < height.length; p2++) {
			const area = Math.min(height[p1], height[p2]) * (p2 - p1);
			//console.log('area', area);
			maxArea = Math.max(maxArea, area);
		}
	}

	return maxArea;
};


var maxAreaShiftingPointers = function (height) {
	let maxArea = 0;
	let p1 = 0;
	let p2 = height.length - 1;

	while (p2 - p1 > 0) {
		console.log(height[p1], height[p2]);
		//           height                           * width
		const area = Math.min(height[p1], height[p2]) * (p2 - p1);
		maxArea = Math.max(maxArea, area);
		if (height[p1] < height[p2]) {
			p1++;
		} else {
			p2--;
		}
	}

	return maxArea;
};

//console.log(maxAreaShiftingPointers([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxAreaShiftingPointers([2,3,4,5,18,17,6]));
