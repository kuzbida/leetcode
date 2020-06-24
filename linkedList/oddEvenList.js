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
var oddEvenList = function (head) {
	if (!head || head.val == null) {
		return head;
	}

	let odd = head;
	let even = head.next;

	while (odd != null && even != null && even.next != null) {
		const newOdd = even.next;
		even.next = even.next.next;

		newOdd.next = odd.next;
		odd.next = newOdd;

		even = even.next;
		odd = odd.next;

	}

	return head;

};

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const a = [1, 2, 3, 4, 5, 6, 7];
const HeadA = a.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});

console.log('oddEvenList', oddEvenList(HeadA));
