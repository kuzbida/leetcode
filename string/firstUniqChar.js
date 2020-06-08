/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const lettersMap = new Map();
	for (let i = 0; i < s.length; i++) {
		const letter = s[i];
		if (!lettersMap.has(letter)) {
			lettersMap.set(letter, 0);
			continue;
		}
		const value = lettersMap.get(letter);
		lettersMap.set(letter, value + 1);
	}

	for (let i = 0; i < s.length; i++) {
		const letter = s[i];
		if (lettersMap.get(letter) === 0) {
			return i;
		}
	}

	return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('"dddccdbba"'));
console.log(firstUniqChar(''));

/*
s = "leetcode"
return 0.

s = "loveleetcode",
return 2. */
