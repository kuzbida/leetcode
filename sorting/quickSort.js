const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array) {
	if (array.length === 1) {
		return array;
	}

	helper(array);

	return array;
}

function helper(array, start, end) {
	start = start || 0;
	end = end || array.length - 1;

	if (array.length === 1 || end - start < 2) {
		return array;
	}
	let changed = false;

	let pivot = end;
	let pointer = start;
	while (pointer < pivot) {
		if (array[pointer] > array[pivot]) {
			const temp = array[pointer];
			array[pointer] = array[pivot - 1];
			array[pivot - 1] = array[pivot];
			array[pivot] = temp;
			pivot--;
			changed = true;
		} else {
			pointer++;
		}
	}

	if (changed) {
		if (pivot === 0) {
			helper(array, pivot + 1, array.length - 1);
		} else if (pivot === array.length - 1) {
			helper(array, 0, pivot - 1);
		} else if (pivot > 0 && pivot < array.length) {
			helper(array, 0, pivot - 1);
			helper(array, pivot + 1, array.length - 1);
		}
	}
}

const answer = quickSort(numbers);
console.log(answer);
