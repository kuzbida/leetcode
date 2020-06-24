/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let pointer = head;
	const stack = [];
	while (pointer) {
		stack.push(pointer);
		pointer = pointer.next;
	}

	if (stack.length > n) {
		const idx = stack.length - n;

		const prev = stack[idx - 1];
		prev.next = stack[idx + 1];
	}

	if (stack.length === n) {
		head = head.next;
	}

	return head;
};

var removeNthFromEnd1 = function(head, n) {
	let back = head;
	let front = getNode(head, n);
	if (front === null) {
		return head.next;
	}
	while (front !== null && front.next !== null) {
		front = front.next;
		back = back.next;
	}
	back.next = back.next.next;
	return head;
};

function getNode(head, index) {
	let curr = head;
	let i = 0;
	while (curr !== null && i <= index) {
		if (i === index) {
			return curr;
		}
		i++;
		curr = curr.next;
	}
	return null;
}

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const a = [4, 1, 8, 4, 5];
const HeadA = a.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});

console.log(removeNthFromEnd(HeadA, 5));

