const helpers = require('./helpers.js');
const sorted_arr = helpers.sorted_array(1000000);

function binary_search(n, arr, start, end) {
	if (n > arr[arr.length - 1]) {
		return -1;
	}
	const median = Math.floor((start + end) / 2);
	if (n === arr[median]) {
		return median;
	} else if (n < arr[median]) {
		return binary_search(n, arr, 0, median - 1);
	} else {
		return binary_search(n, arr, median + 1, end);
	}
}

console.time('binary_search');
console.log(binary_search(999999, sorted_arr, 0, sorted_arr.length - 1));
console.timeEnd('binary_search');

function binary_search1(n, arr) {
	if (n > arr[arr.length - 1]) {
		return -1;
	}
	const median = Math.floor((arr.length) / 2);
	if (n === arr[median]) {
		return median;
	} else if (n < arr[median]) {
		return binary_search1(n, arr.slice(0, median - 1));
	} else {
		return binary_search1(n, arr.slice(median + 1));
	}
}

console.time('binary_search1');
console.log(binary_search1(999999, sorted_arr));
console.timeEnd('binary_search1');

function iterative_search(n, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === n) {
			console.log('i', i);
			return i;
		}
	}
	return -1;
}

console.time('iterative_search');
console.log(iterative_search(999999, sorted_arr));
console.timeEnd('iterative_search');
