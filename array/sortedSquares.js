/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
	if (!Array.isArray(A)) {
		return A;
	}

	const answer = [];
	let writePointer = 0;
	let negative = 0;

	while (negative < (A.length - 1) && A[negative] < 0) {
		negative++;
	}
	let positive = negative--;

	while (negative >= 0 && positive < A.length) {
		if (Math.pow(A[negative], 2) < Math.pow(A[positive], 2)) {
			answer[writePointer++] = Math.pow(A[negative], 2);
			negative--;
		} else {
			answer[writePointer++] = Math.pow(A[positive], 2);
			positive++;
		}
	}

	while (negative >= 0) {
		answer[writePointer++] = Math.pow(A[negative], 2);
		negative--;
	}

	while (positive < A.length) {
		answer[writePointer++] = Math.pow(A[positive], 2);
		positive++;
	}

	return answer;
};

console.log(sortedSquares([-1, 2, 2]));
console.log(sortedSquares([-9, -5, -1]));
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([1, 2, 3, 11]));
console.log(sortedSquares([-1]));
