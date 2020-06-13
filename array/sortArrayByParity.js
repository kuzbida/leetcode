/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
	let write = 0;
	for (let read = 0; read < A.length; read++) {
		if (A[read] % 2 === 0) {
			const back = A[write];
			A[write] = A[read];
			A[read] = back;
			write++;
		}
	}

	//console.log('A', A);

	return A;

};

//Input: [3,1,2,4]
//Output: [2,4,3,1]

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([4, 3, 1, 2, 4]));
console.log(sortArrayByParity([1, 3, 1, 5, 4]));
