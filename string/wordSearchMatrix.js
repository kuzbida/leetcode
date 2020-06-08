
function Position(x, y, letter, board, word, index) {
	this.x = x;
	this.y = y;
	this.letter = letter;
	this.board = board;
	this.word = word;
	this.index = index;

	this.getId = function () {
		return `${this.x}*${this.y}`;
	};

	this.getPossibleOptions = function () {
		const x = this.x;
		const y = this.y;
		const boardHeight = this.board.length - 1;
		const boardWidth = this.board[0].length - 1;

		const positions = [];

		if (x > 0) {
			positions.push([x - 1, y]);
		}

		if (x < boardWidth) {
			positions.push([x + 1, y]);
		}

		if (y > 0) {
			positions.push([x, y - 1]);
		}

		if (y < boardHeight) {
			positions.push([x, y + 1]);
		}

		return positions;
	};

	this.getLetter = function (x, y) {
		return this.board[y][x];
	};

	this.findSibling = function () {
		if (this.index >= this.word.length) {
			return;
		}
		const letter = this.word[this.index + 1];
		const positions = this.getPossibleOptions();
		//const siblings = [];

		for (let i = 0; i < positions.length; i++) {
			const [x, y] = positions[i];
			const l = this.getLetter(x, y);
			if (l === letter) {
				return new Position(x, y, letter, this.board, this.word, this.index + 1);
				//siblings.push(new Position(x, y, letter))
			}
		}
	};
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	/*
	* 1 <= board.length <= 200
	*	1 <= board[i].length <= 200*/

	const boardHeight = board.length || 0;

	if (boardHeight < 1 || boardHeight > 200) {
		return false;
	}
	const boardWidth = board.length > 0 ? board[0].length : null;

	if (!boardWidth || boardWidth < 1 || boardWidth > 200) {
		return false;
	}

	let result = false;
	const firstLetters = [];

	function searchFirstLetter(letter) {
		for (let y = 0; y < boardHeight; y++) {
			const row = board[y];
			for (let x = 0; x < boardWidth; x++) {
				const l = row[x];
				if (l === letter) {
					const p = new Position(x, y, letter, board, word, 0);
					firstLetters.push(p);
				}
			}
		}
	}

	// start looking for all possible 1st letters
	searchFirstLetter(word[0]);

	if (firstLetters.length === 0) {
		// we didn't find first letter
		return false;
	}

	for (let i = 0; i < firstLetters.length; i++) {
		const wordArr = [];
		const firstLetter = firstLetters[i];
		wordArr.push(firstLetter);

		while (wordArr.length <= word.length) {
			const lastOne = wordArr[wordArr.length - 1];
			const sibling = lastOne.findSibling();
			if (sibling) {
				if (sibling.getId() !== lastOne.getId()) {
					wordArr.push(sibling);
				}
			} else {
				break;
			}
		}

		if (wordArr.length === word.length) {
			result = true;
			return true;
		}
	}

	return result;

};

const board =
		[
			['A', 'B', 'C', 'E'],
			['S', 'F', 'C', 'S'],
			['A', 'D', 'E', 'E']
		];
const w1 = 'ABCCED';
const w2 = 'SEE';
const w3 = 'ABCB';

console.log(exist(board, w1));
console.log(exist(board, w2));
console.log(exist(board, w3));
/*
Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.*/
