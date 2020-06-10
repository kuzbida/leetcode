/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
//	0 <= A.length <= 10000

	if (A.length < 3 || A.length > 10000) {
		return false;
	}

	let direction = 'upside'; // 'downside'

	for (let i = 0; i < A.length - 1; i++) {
		const current = A[i];
		const next = A[i + 1];

		if (direction === 'upside' && current > next && i !== 0) {
			direction = 'downside';
		}

		if (direction === 'upside' && current >= next || direction === 'downside' && current <= next) {
			return false;
		}
	}

	return direction === 'downside';
};

console.time('validMountainArray');
console.log(validMountainArray([2, 1]));
console.timeEnd('validMountainArray');

console.time('validMountainArray');
console.log(validMountainArray([3,5,5]));
console.timeEnd('validMountainArray');

console.time('validMountainArray');
console.log(validMountainArray([0,3,2,1]));
console.timeEnd('validMountainArray');

console.time('validMountainArray');
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));
console.timeEnd('validMountainArray');
