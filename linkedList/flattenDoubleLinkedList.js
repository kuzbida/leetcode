function ListNode(val, next, prev, child) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    this.prev = (prev === undefined ? null : prev);
    this.child = (child === undefined ? null : child);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function flattenList(head) {

    let current = head;

    function helper(current) {
        const next = current.next;

        const child = current.child;

        child.prev = current;
        current.next = child;

        let tail = child;
        while (tail.next) {
            if (tail.child) {
                helper(tail);
            }
            tail = tail.next;
        }

        if (next) {
            next.prev = tail;
            tail.next = next;
        }
        current.child = null;
    }

    while (current) {
        if (current.child) {
            helper(current);
        }

        current = current.next;
    }

    return head;
}

var a1 = new ListNode(1);
var a2 = new ListNode(2);
var a3 = new ListNode(6);
var b1 = new ListNode(3);
var b2 = new ListNode(5);
var c1 = new ListNode(4);

b1.next = b2;
b1.child = c1;

b2.prev = b1;

a3.prev = a2;

a2.child = b1;
a2.next = a3;
a2.prev = a1;

a1.next = a2;


console.log(flattenList(a1));



console.log(flattenList(a1));