function permutation(str, prefix) {
	if (str.length == 0) {
		console.log(prefix);
	} else {
		for (let i = 0; i < str.length; i++) {
			const rem = str.substring(0, i) + str.substring(i + 1);
			//console.log('rem', rem);
			//console.log('prefix', prefix);
			//console.log('letter', str.charAt(i));
			permutation(rem, prefix + str.charAt(i));
		}
	}
}

console.time('permutation');
permutation('abcdef', '');
console.timeEnd('permutation');
