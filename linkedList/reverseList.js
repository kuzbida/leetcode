/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head || !head.next) {
		return head;
	}
	let prev = head;
	let curr = head.next;
	head.next = null;

	while (curr) {
		const next = curr.next;
		curr.next = prev;
		if (!next) {
			break;
		}
		prev = curr;
		curr = next;
	}

	return curr;
};

var reverseListRecursion = function (head) {
	if (!head || !head.next) {
		return head;
	}

	function reverse(curr, prev) {
		const next = curr.next;
		curr.next = prev;
		if (next) {
			return reverse(next, curr);
		}
		return curr;
	}

	return reverse(head, null);
};

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const a = [1, 2, 3, 4, 5];
const HeadA = a.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});

//console.log('reverseList', reverseList(HeadA));
console.log('reverseListRecursion', reverseListRecursion(HeadA));
