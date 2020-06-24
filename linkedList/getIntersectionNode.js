/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/*var getIntersectionNode = function (headA, headB) {
	const map = new Map();
	while (headA) {
		map.set(headA.val, headA);
		headA = headA && headA.next;
	}


	while (headB) {
		if (map.has(headB.val)) {
			const cachedVal = map.get(headB.val);
			if (headB.next && cachedVal.next && headB.next.val === cachedVal.next.val) {
				return headB.next;
			}
		}
		headB = headB.next;
	}

	return null;

};*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	if (!headA || !headB) return null;

	let currA = headA;
	let currB = headB;

	while (currA !== currB) {

		if (!currA.next && !currB.next) {
			currA = currB = null;
			break;
		}

		if (!currA.next)
			currA = headB;
		else
			currA = currA.next;

		if (!currB.next)
			currB = headA;
		else
			currB = currB.next;

	}

	return currA;


};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

//const a = [0, 9, 1, 2, 4];
const a = [4, 1, 8, 4, 5];
const HeadA = a.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});
//const b = [3, 2, 4];
const b = [5, 0, 1, 8, 4, 5];
const HeadB = b.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});

console.log(getIntersectionNode(HeadA, HeadB));
/*
Input: intersectVal = 8,
listA = [4,1,8,4,5],
listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8
(note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5].
From the head of B, it reads as [5,0,1,8,4,5].
There are 2 nodes before the intersected node in A;
There are 3 nodes before the intersected node in B.
* */

/*
Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [0,9,1,2,4].
From the head of B, it reads as [3,2,4].
There are 3 nodes before the intersected node in A;
There are 1 node before the intersected node in B.
* */
