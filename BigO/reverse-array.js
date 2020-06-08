/*
* Complexity is O(N)
*
* */

function reverse(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		const other = arr.length - i - 1;
		const temp = arr[i];
		arr[i] = arr[other];
		arr[other] = temp;
	}
	return arr;
}


console.log(reverse([1,2,3,4,5]));
