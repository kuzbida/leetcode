function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807.
var addTwoNumbers = function (l1, l2) {
	let sum = new ListNode();
	let mainCursor = sum;
	let curr1 = l1;
	let curr2 = l2;

	let extra = 0;
	while (curr1 || curr2 || extra) {
		let sumCur = (curr1 ? curr1.val : 0) + (curr2 ? curr2.val : 0);
		if (extra > 0) {
			sumCur += extra;
			extra = 0;
		}
		if (sumCur > 9) {
			sumCur -= 10;
			extra = 1;
		}

		mainCursor.val = sumCur;

		curr1 = curr1 ? curr1.next : null;
		curr2 = curr2 ? curr2.next : null;

		if (curr1 || curr2 || extra) {
			mainCursor.next = new ListNode();
		}
		mainCursor = mainCursor.next;
	}

	return sum;
};

const a = [2, 4, 3];
const b = [5, 6, 4];
const HeadA = a.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});
const HeadB = b.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});

//console.log('mergeTwoLists', addTwoNumbers(HeadA, HeadB));
console.log('mergeTwoLists', addTwoNumbers(new ListNode(5), new ListNode(5)));
