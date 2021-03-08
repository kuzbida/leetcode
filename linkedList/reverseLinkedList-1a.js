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
var reverseList = function (head) {
    if (!head) {
        return head;
    }

    let pointer = head;
    let reversed = null;

    while (pointer) {
        const next = pointer.next;
        pointer.next = reversed;
        reversed = pointer;
        pointer = next;
    }

    return reversed;
};


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

const head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(
                    5
                )
            )
        )
    )
);

console.log(JSON.stringify(reverseList(head)));
console.log(JSON.stringify(reverseList(new ListNode(1, new ListNode(2)))));
console.log(JSON.stringify(reverseList(new ListNode(1))));