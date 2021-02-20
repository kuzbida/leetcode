function f(height) {
	let totalArea = 0;

	for (let i = 0; i < height.length; i++) {
		let maxL = 0;
		let maxR = 0;
		let p1 = i;
		let p2 = i;

		while (p1 >= 0) {
			maxL = Math.max(maxL, height[p1]);
			p1--;
		}

		while (p2 < height.length) {
			maxR = Math.max(maxR, height[p2]);
			p2++;
		}

		let currentArea = Math.min(maxL, maxR) - height[i];

		console.log({
			i,
			maxL,
			maxR,
			currentArea
		});

		if (currentArea > 0) {
			totalArea += currentArea;
		}
	}

	return totalArea;
}
function trapTwoPointer(height) {
	let totalArea = 0;
	let pL = 0, pR = height.length - 1;
	let maxL = 0, maxR = 0;

	while (pL < pR) {
		const hL = height[pL];
		const hR = height[pR];


		if (hL < hR) {
			if (hL < maxL) {
				totalArea += maxL - hL;
			}
			pL++;
		} else {
			if (hR < maxR) {
				totalArea += maxR - hR;
			}
			pR--;
		}

		maxL = Math.max(maxL, hL);
		maxR = Math.max(maxR, hR);
	}

	return totalArea;
}

console.log(trapTwoPointer([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(trapTwoPointer([4, 2, 0, 3, 2, 5]));
