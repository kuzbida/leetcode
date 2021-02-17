/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (k <= 0 || !head) {
		return head;
	}

	const list = [];
	let curr = head;

	while (curr) {
		list.push(curr);
		curr = curr.next;
	}

	const length = list.length;
	let itemToRotate = k % length;

	while (itemToRotate > 0) {
		const last = list.pop();
		last.next = list[0];
		list.unshift(last);
		list[list.length - 1].next = null;
		itemToRotate--;
	}

	return list[0];

};

// 1->2->3->4->5

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

const b = [0, 1, 2];
const HeadB = b.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});

//console.log('rotateRight', rotateRight(HeadA, 2));
console.log('rotateRight', rotateRight(HeadB, 4));
