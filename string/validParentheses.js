/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function (s) {
	if (s.length === 0) {
		return true; // TODO or should be false?
	}

	// length of string should be even
	if (s.length % 2 !== 0) {
		return false;
	}

	let result;

	const parentheses = new Map([['{', '}'], ['(', ')'], ['[', ']']]);

	function check(s, idx) {
		if (s.length === 0) {
			// we removed all parentheses
			// string is valid
			result = true;
			return;
		}

		if (idx > s.length) {
			// string is invalid
			result = false;
			return;
		}

		const curLetter = s[idx];
		const nextLetter = s[idx + 1];

		if (!curLetter || !nextLetter) {
			//check(s, 0);
			result = false;
			return;
		}

		if (parentheses.get(curLetter) === nextLetter) {
			const updatedS = (idx > 0 ? s.slice(0, idx) : '') + s.slice(idx + 2);
			const updatedIdx = idx - 1 >= 0 ? idx - 1 : 0;
			check(updatedS, updatedIdx);
			return;
		}

		check(s, idx + 1);
	}

	check(s, 0);

	return result;

};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid2 = function (s) {
	if (s.length === 0) {
		return true;
	}

	// length of string should be even
	if (s.length % 2 !== 0) {
		return false;
	}

	let result;

	const parentheses = ['{}', '[]', '()'];

	function check(s) {
		parentheses.forEach((p) => {
			s = s.replace(p, '');
		});

		if (s.length === 0) {
			// we removed all parentheses
			// string is valid
			result = true;
			return;
		}

		const does = parentheses.some((p) => {
			return s.includes(p);
		});

		if (!does) {
			result = false;
			return;
		}
		check(s);
	}

	check(s);

	return result;

};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	const keys = {
		'(': ')',
		'{': '}',
		'[': ']'
	};
	for (const ch of s) {
		if (ch in keys) {
			stack.push(keys[ch]);
		} else {
			if (stack.length === 0 || stack.pop() !== ch) {
				return false;
			}
		}
	}
	return stack.length === 0;

};

const s1 = '{{}{()}}[]';
const s4 = '({[]})';
const s2 = '(]';
const s3 = '([)]';
const s5 = '{[(])}';
const s6 = '{';
const s7 = '[]}{';



/*
console.log('isValid', isValid(s1));
console.log('isValid', isValid(s4));
console.log('isValid', isValid(s2));
console.log('isValid', isValid(s3));
console.log('isValid', isValid(s5));
console.log('isValid', isValid(s6));
console.log('isValid', isValid(s7));*/


console.time('isValid');
console.log('isValid', isValid(s1));
console.timeEnd('isValid');
console.time('isValid1');
console.log('isValid1', isValid1(s1));
console.timeEnd('isValid1');
console.time('isValid2');
console.log('isValid2', isValid2(s1));
console.timeEnd('isValid2');
console.log('===================');
console.time('isValid');
console.log('isValid', isValid(s2));
console.timeEnd('isValid');
console.time('isValid1');
console.log('isValid1', isValid1(s2));
console.timeEnd('isValid1');
console.time('isValid2');
console.log('isValid2', isValid2(s2));
console.timeEnd('isValid2');
console.log('===================');
console.time('isValid');
console.log('isValid', isValid(s3));
console.timeEnd('isValid');
console.time('isValid1');
console.log('isValid1', isValid1(s3));
console.timeEnd('isValid1');
console.time('isValid2');
console.log('isValid2', isValid2(s3));
console.timeEnd('isValid2');
console.log('===================');
console.time('isValid');
console.log('isValid', isValid(s4));
console.timeEnd('isValid');
console.time('isValid1');
console.log('isValid1', isValid1(s4));
console.timeEnd('isValid1');
console.time('isValid2');
console.log('isValid2', isValid2(s4));
console.timeEnd('isValid2');
console.log('===================');
console.time('isValid');
console.log('isValid', isValid(s5));
console.timeEnd('isValid');
console.time('isValid1');
console.log('isValid1', isValid1(s5));
console.timeEnd('isValid1');
console.time('isValid2');
console.log('isValid2', isValid2(s5));
console.timeEnd('isValid2');
console.log('===================');
console.time('isValid');
console.log('isValid', isValid(s6));
console.timeEnd('isValid');
console.time('isValid1');
console.log('isValid1', isValid1(s6));
console.timeEnd('isValid1');
console.time('isValid2');
console.log('isValid2', isValid2(s6));
console.timeEnd('isValid2');
console.log('===================');
console.time('isValid');
console.log('isValid', isValid(s7));
console.timeEnd('isValid');
console.time('isValid1');
console.log('isValid1', isValid1(s7));
console.timeEnd('isValid1');
console.time('isValid2');
console.log('isValid2', isValid2(s7));
console.timeEnd('isValid2');
console.log('===================');
