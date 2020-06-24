/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	const values = [];
	let curr = head;

	while (curr) {
		values.push(curr.val);

		curr = curr.next;
	}

	const len = values.length;
	if (len == 0 || len == 1) {
		return true;
	}

	const part1 = values.slice(0, Math.floor(len / 2));
	const part2 = values.slice(Math.ceil(len / 2));

	return part1.join('') === part2.reverse().join('');
};

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const a = [1, 2, 3, 2, 3, 2, 1];
const HeadA = a.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});

console.log('isPalindrome', isPalindrome(HeadA));

