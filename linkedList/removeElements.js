/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	let prev = null;
	let curr = head;

	while (curr) {
		let next = curr.next;
		if (curr.val === val) {
			if (prev) {
				prev.next = next;
				curr = prev.next;
				continue;
			} else {
				if (next) {
					curr.val = next.val;
					curr.next = next.next;
					continue;
				} else {
					head = null;
				}
			}
		}

		if (!next) {
			break;
		}

		prev = curr;
		curr = next;
	}

	return head;
};

/*var removeElementsRecursion = function (head, val) {

	function r(curr, prev) {
		if (curr.val === val) {
			if (prev) {
				prev.next = curr.next;
			} else {
				curr = curr.next;
			}
		}

		if (!curr || !curr.next) {
			return curr;

		}

		return r(curr.next, curr);

	}

	return r(head, null);
};*/

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const a = [1, 2, 2, 1, 3, 4,6];
const HeadA = a.reduceRight((prev, current) => {
	const node = new ListNode(current);
	node.next = prev instanceof ListNode ? prev : new ListNode(prev);
	return node;
});

console.log('removeElements', removeElements(new ListNode(1), 1));
//console.log('removeElementsRecursion', removeElementsRecursion(HeadA, 3));
