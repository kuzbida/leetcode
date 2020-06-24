/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if (!head || !head.next || !head.next.next) {
		return false;
	}
	let cycle = true;
	let slow = head.next;
	let fast = slow.next;

	while (fast.val !== slow.val) {
		if (!slow || !slow.next || !fast || !fast.next || !fast.next.next) {
			cycle = false;
			break;
		}
		slow = slow.next;
		fast = fast.next.next;
	}

	return cycle;

};

var hasCycle1 = function (head) {
	while (head) {
		if (head.val === 'checked') {
			return true;
		}
		head.val = 'checked';
		head = head.next;
	}

	return false;
};

var hasCycle2 = function (head) {
	let seen = new Map();

	while (head) {
		if (seen.has(head.next)) {
			return head.next;
		} else {
			seen.set(head, pos);
		}
		head = head.next;
	}

	return null;
};
