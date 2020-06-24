/**
 * Initialize your data structure here.
 */

class Node {
	constructor(value) {
		this.val = value;
		this.next = null;
		this.prev = null;
	}

	setNext(node) {
		this.next = node;
	};

	getNext() {
		return this.next;
	};

	setPrev(node) {
		this.prev = node;
	};

	getPrev() {
		return this.prev;
	};
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

class MyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	getNode(index) {
		if (index === 0) {
			return this.head;
		}

		if (index === (this.length - 1)) {
			return this.tail;
		}

		let node = this.head;
		while (index > 0) {
			node = node && node.getNext();
			index--;
		}

		return node;
	}

	/**
	 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
	 * @param {number} index
	 * @return {number}
	 */
	get(index) {
		if (index > this.length || index < 0) {
			return -1;
		}

		const node = this.getNode(index);

		return node ? node.val : -1;

	};

	/**
	 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the
	 * first node of the linked list.
	 * @param {number} val
	 * @return {void}
	 */
	addAtHead(val) {
		const newNode = new Node(val);

		if (this.head) {
			this.head.setPrev(newNode);
			newNode.setNext(this.head);
		}
		this.head = newNode;
		if (this.length === 0) {
			this.tail = newNode;
		}

		this.length++;
	};

	/**
	 * Append a node of value val to the last element of the linked list.
	 * @param {number} val
	 * @return {void}
	 */
	addAtTail(val) {
		const newNode = new Node(val);

		newNode.setPrev(this.tail);
		this.tail.setNext(newNode);
		this.tail = newNode;

		this.length++;
	};

	/**
	 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list,
	 * the node will be appended to the end of linked list. If index is greater than the length, the node will not be
	 * inserted.
	 * @param {number} index
	 * @param {number} val
	 * @return {void}
	 */
	addAtIndex(index, val) {
		if (index < 0 || index > this.length) {
			return;
		}

		if (index === 0) {
			this.addAtHead(val);
			return;
		}

		if (index === this.length) {
			this.addAtTail(val);
			return;
		}

		const node = this.getNode(index - 1);
		const newNode = new Node(val);

		const nextNode = node.getNext();
		if (nextNode) {
			newNode.setNext(nextNode);
			nextNode.setPrev(newNode);
		}
		newNode.setPrev(node);
		node.setNext(newNode);

		this.length++;
	};

	/**
	 * Delete the index-th node in the linked list, if the index is valid.
	 * @param {number} index
	 * @return {void}
	 */
	deleteAtIndex(index) {
		if (index > (this.length - 1)) {
			return;
		}

		if (index === 0) {
			const next = this.head.getNext();
			if (next) {
				next.setPrev(null);
			}
			this.head = next;

			if (this.length === 1) {
				this.head = null;
				this.tail = null;
			}

			this.length--;

			return;
		}

		if (index === (this.length - 1)) {
			const prev = this.tail.getPrev();
			this.tail = prev;
			prev.setNext(null);
			this.length--;

			return;
		}

		const node = this.getNode(index);

		const prev = node.getPrev();
		const next = node.getNext();

		prev && prev.setNext(next);
		next && next.setPrev(prev);

		if (index === 1) {
			//	update head
			this.head = prev;
		}

		if (index === (this.length - 2)) {
			//	update head
			this.tail.setPrev(prev);
		}

		this.length--;

	};
}

var obj = new MyLinkedList();
var param_1 = obj.get(1);
obj.addAtHead(1);
//console.log('addAtHead', obj);
obj.addAtTail(3);
//console.log('addAtTail', obj);
obj.addAtIndex(1, 2);
console.log('addAtIndex 1: ', obj);
obj.addAtIndex(3, 4);
console.log('addAtIndex 4: ', obj);
obj.addAtIndex(6, 6);
console.log('addAtIndex', obj);

obj.deleteAtIndex(1);
console.log('deleteAtIndex(1)', obj);

obj.deleteAtIndex(2);
console.log('deleteAtIndex(2)', obj);

obj.deleteAtIndex(3);
console.log('deleteAtIndex(3)', obj);

console.log('get(0)', obj.get(0));
console.log('get(1)', obj.get(1));
console.log('get(2)', obj.get(2));
console.log('get(3)', obj.get(3));
console.log('get(4)', obj.get(4));
console.log('get(-1)', obj.get(-1));
