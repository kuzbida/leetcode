function div(a, b) {
	let count = 0;
	let sum = b;

	while (sum <= a) {
		sum += b;
		count++;
		console.log(count);
	}
	return count;
}


console.log('div', div(100, 2))
