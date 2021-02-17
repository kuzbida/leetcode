/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
	let curr1 = head;
	let curr2 = head;
	let idx = 0;
	const mapOld = new Map();
	const mapNew = new Map();

	while (curr1) {
		mapOld.set(curr1, idx);
		const cloneNode = new Node(curr1.val, null, null);

		mapNew.set(idx, cloneNode);
		curr1 = curr1.next;
		idx++;
	}

	console.log('mapOld', mapOld);
	console.log('mapNew', mapNew);

	while (curr2) {
		const nodeIdx = mapOld.get(curr2);
		const newNode = mapNew.get(nodeIdx);
		if (curr2.random) {
			const randomIdx = mapOld.get(curr2.random);
			newNode.random = mapNew.get(randomIdx);
		}

		if (curr2.next) {
			const nextIdx = mapOld.get(curr2.next);
			newNode.next = mapNew.get(nextIdx);
		}

		mapNew.set(nodeIdx, newNode);

		curr2 = curr2.next;
	}

	/* let i = 0;
	while (i < idx) {

	} */
	return mapNew.get(0);
};

//Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
//Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

function Node(val, next, random) {
	this.val = val;
	this.next = next;
	this.random = random;
}

const node0 = new Node(7, null, null);

const node1 = new Node(13, null, null);

const node2 = new Node(11, null, null);

const node3 = new Node(10, null, null);

const node4 = new Node(1, null, null);

node1.random = node0;
node2.random = node4;
node3.random = node2;
node4.random = node0;

node3.next = node4;
node2.next = node3;
node1.next = node2;
node0.next = node1;

//const a = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]];

/*const head = a.reduceRight((prev, [val, random]) => {
	const node = new Node(val, null, random);
	node.next = prev instanceof Node ? prev : new Node(prev, null, random);
	return node;
});*/

console.log('head', copyRandomList(node0));
