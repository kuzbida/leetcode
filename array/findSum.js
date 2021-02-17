

function findSum(nums, target) {
	if (!nums || Array.isArray(nums) && nums.length < 2) {
		return [];
	}

	for (let p1 = 0; p1 < nums.length - 1; p1++) {
		const targetSum = target - nums[p1];

		for (let p2 = p1 + 1; p2 < nums.length; p2++) {
			if (targetSum === nums[p2]) {
				return [p1, p2];
			}
		}
	}

	return [];
}
function findSumOptimal(nums, target) {
	if (!nums || Array.isArray(nums) && nums.length < 2) {
		return [];
	}

	const map = new Map();

	for (let p1 = 0; p1 < nums.length; p1++) {
		map.set(nums[p1], p1);
	}
	for (let p1 = 0; p1 < nums.length; p1++) {
		const targetSum = target - nums[p1];
		const result = map.get(targetSum);
		if (result !== undefined && result !== p1) {
			return [p1, result]
		}
	}

	return [];
}


function findSumOptimalSuper(nums, target) {
	if (!nums || Array.isArray(nums) && nums.length < 2) {
		return [];
	}

	const map = new Map();

	for (let p1 = 0; p1 < nums.length; p1++) {
		const targetSum = target - nums[p1];

		const result = map.get(targetSum);
		if (result !== undefined && result !== p1) {
			return [p1, result]
		} else {
			map.set(nums[p1], p1);
		}
	}

	return [];
}

//console.log(findSum([1, 3, 6, 9, 2, 8, 4], 11));
//console.log(findSumOptimal([1, 3, 6, 9, 2, 8, 4], 11));
console.log(findSumOptimal([3, 2, 4], 6));
//console.log(findSumOptimal([], 11));
//console.log(findSum([2], 11));
//console.log(findSumOptimal([2], 11));
