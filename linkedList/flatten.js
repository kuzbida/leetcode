/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
	let curr = head;
	let nextStack = [];

	while (curr) {
		if (curr.child) {
			if (curr.next) {
				nextStack.push(curr.next);
			}
			const child = curr.child;
			if (!child.next && nextStack.length > 0) {
				const next = nextStack.pop();
				next.prev = child;
				child.next = next;
			}

			child.prev = curr;
			curr.next = child;
			curr.child = null;
		}

		if (!curr.next && nextStack.length > 0) {
			const next = nextStack.pop();
			next.prev = curr;
			curr.next = next;
		}

		curr = curr.next;
	}

	return head;
};

function Node(val, prev, next, child) {
	this.val = val;
	this.prev = prev;
	this.next = next;
	this.child = child;
}

// 1,2,3,7,8,11,12,9,10,4,5,6

var head = new Node(1,
		null,
		new Node(
				2,
				head,
				new Node(
						3,
						null,
						new Node(
								4,
								null,
								new Node(
										5
								)
						),
						new Node(
								7,
								null,
								new Node(
										8,
										null,
										null,
										null
								)
						)
				)
		),
		null
);

console.log('head', flatten(head));
