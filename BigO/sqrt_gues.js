function sqrt_guess(n) {
	return sqrt_helper(n, 1, n);
}

function sqrt_helper(n, min, max) {
	if (max < min) {
		return -1;
	}

	const guess = (min + max) / 2;
	console.log('guess', guess);
	const double = guess * guess;
	if (double === n) {
		// success
		return guess;
	} else if (double < n) {
		//	too low
		//console.log('too low');
		return sqrt_helper(n, min + 1, max);
	} else {
		//	too high
		//console.log('too high');
		return sqrt_helper(n, min - 1, max);
	}
}

console.log('sqrt', sqrt_guess(16));
