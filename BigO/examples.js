/*
* Complexity is O(ab)
*
* */

function print(arrA, arrB) {
	const l1 = arrA.length;
	const l2 = arrB.length;
	for (let i = 0; i < l1; i++) {
		for (let j = 0; j < l2; j++) {
			console.log(`a = ${arrA[i]}; b = ${arrB[j]}`);
		}
	}
}

console.time("print");
print([1,2,3,4], [5,6,7,8]);
console.timeEnd("print");


/*
* Complexity is O(N**2)
*
* */

function print1(arrA) {
	for (let i = 0; i < arrA.length; i++) {
		for (let j = 0; j < arrA.length; j++) {
			console.log(`a = ${arrA[i]}; b = ${arrA[j]}`);
		}
	}
}

console.time("print1");
print1([1,2,3,4], [5,6,7,8]);
console.timeEnd("print1");
