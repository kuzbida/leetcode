function sqrt_iteration(n) {
	for (let guess = 1; guess * guess <= n; guess++) {
		if (guess * guess === n) {
			return guess;
		}
	}
	return -1;
}

console.log('sqrt', sqrt_iteration(16));
