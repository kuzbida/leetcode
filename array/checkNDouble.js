/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
	if (arr.length < 2 || arr.length > 500) {
		return false;
	}

	for (let i = 0; i < arr.length; i++) {
		const N = arr[i];
		if (N % 2 === 0) {
			for (let j = 0; j < arr.length; j++) {
				if (i === j) {
					continue;
				}
				if (N === (arr[j] * 2)) {
					return true;
				}
			}
		}
	}

	return false;
};


console.time('checkIfExist');
console.log(checkIfExist([10, 2, 5, 3]));
console.timeEnd('checkIfExist');
console.log('=====');
console.time('checkIfExist');
console.log(checkIfExist([7, 1, 14, 11]));
console.timeEnd('checkIfExist');
console.log('=====');
console.time('checkIfExist');
console.log(checkIfExist([3, 1, 7, 11]));
console.timeEnd('checkIfExist');
console.log('=====');
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExistHashSet = function (arr) {
	if (arr.length < 2 || arr.length > 500) {
		return false;
	}

	const unorderedSet = new Set();

	for (let i = 0; i < arr.length; i++) {
		const divided = arr[i] / 2;
		const multiplied = arr[i] * 2;

		if (arr[i] % 2 === 0 && unorderedSet.has(divided) || unorderedSet.has(multiplied)) {
			return true;
		} else {
			unorderedSet.add(arr[i]);
		}
	}

	return false;
};

console.time('checkIfExistHashSet');
console.log(checkIfExistHashSet([10, 2, 5, 3]));
console.timeEnd('checkIfExistHashSet');
console.log('=====');
console.time('checkIfExistHashSet');
console.log(checkIfExistHashSet([7, 1, 14, 11]));
console.timeEnd('checkIfExistHashSet');
console.log('=====');
console.time('checkIfExistHashSet');
console.log(checkIfExistHashSet([3, 1, 7, 11]));
console.timeEnd('checkIfExistHashSet');
console.log('=====');
