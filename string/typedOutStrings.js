function buildString(s) {
	const arr = [];
	let p = 0;
	while (p < s.length) {
		if (s[p] !== '#') {
			arr.push(s[p]);
		} else {
			arr.pop();
		}
		p++;
	}

	return arr;
}

function bruteForce(s, t) {
	if (typeof s !== 'string' || typeof t !== 'string') {
		return false;
	}

	let sMapped = buildString(s);
	let tMapped = buildString(t);

	if (tMapped.length !== sMapped.length) {
		return false;
	} else {
		for (let i = 0; i < tMapped.length; i++) {
			if (tMapped[i] !== sMapped[i]) {
				return false;
			}
		}
	}

	return true;
}

//console.log(bruteForce('a#b#c#', 'z#'));
//console.log(bruteForce('A12#b', 'a12#b'));
//console.log(bruteForce('A###b', 'A##b'));

function twoPointer(S, T) {
	if (typeof S !== 'string' || typeof T !== 'string') {
		return false;
	}

	let p1 = S.length - 1;
	let p2 = T.length - 1;
	let result = true;

	let sSkip = 0;
	let tSkip = 0;

	while (p1 >= 0 || p2 >= 0) {

		if (S[p1] === '#') {
			sSkip += 2;
			while (sSkip > 0) {
				p1--;
				sSkip--;
				if (S[p1] === '#') {
					sSkip += 2;
				}
			}
			continue;
		}
		if (T[p2] === '#') {
			tSkip += 2;
			while (tSkip > 0) {
				p2--;
				tSkip--;
				if (T[p2] === '#') {
					tSkip += 2;
				}
			}
			continue;
		}

		if (sSkip) {
			while (sSkip > 0) {
				p1--;
				sSkip--;
				if (S[p1] === '#') {
					sSkip += 2;
				}
			}
			continue;
		}

		if (S[p1] !== T[p2]) {
			result = false;
			break;
		}
		p1--;
		p2--;
	}

	return result;
}

console.log(twoPointer('a#b#c#', 'z#'));
console.log(twoPointer('A12#b', 'a12#b'));
console.log(twoPointer('gtc#uz#', 'gtcm##uz#'));
console.log(twoPointer('gtc#uz#', 'gtcma##uz#'));
console.log(twoPointer('', ''));
console.log(twoPointer('bxj##tw', 'bxo#j##tw'));
console.log(twoPointer('xywrrmp', 'xywrrmu#p'));
