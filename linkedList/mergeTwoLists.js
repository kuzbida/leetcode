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
var mergeTwoLists = function (l1, l2) {

	let curr1 = l1;
	let curr2 = l2;
	let merged;

	if (!curr1 && !curr2) {
		return null;
	} else if (!curr1) {
		merged = curr2;
		curr2 = curr2.next;
	} else if (!curr2) {
		merged = curr1;
		curr1 = curr1.next;
	} else if (curr1.val < curr2.val) {
		merged = curr1;
		curr1 = curr1.next;
	} else {
		merged = curr2;
		curr2 = curr2.next;
	}

	let currMerged = merged;

	while (curr1 && curr2) {

		if (curr1.val < curr2.val) {
			currMerged.next = curr1;

			curr1 = curr1.next;
		} else {
			currMerged.next = curr2;

			curr2 = curr2.next;
		}
		currMerged = currMerged.next;
	}

	while (curr1 && curr2 == null) {
		currMerged.next = curr1;
		curr1 = curr1.next;
		currMerged = currMerged.next;
	}

	while (curr2 && curr1 == null) {
		currMerged.next = curr2;
		curr2 = curr2.next;
		currMerged = currMerged.next;
	}

	return merged;
};

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];
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

console.log('mergeTwoLists', mergeTwoLists(HeadA, HeadB));
