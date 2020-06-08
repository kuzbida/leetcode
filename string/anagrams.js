function aclean(arr) {
	const wordsMap = new Map();
	for(let i = 0; i < arr.length; i++) {
		const word = arr[i];
		const key = word.toLowerCase().split('').sort().join('');
		wordsMap.set(key, word);
	}

	return Array.from(wordsMap.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
