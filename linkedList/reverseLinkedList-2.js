/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 1 => 2 => 3 => 4 => 5 => null
// 1 =>
var reverseBetween = function (head, left, right) {
    if (!head) {
        return head;
    }

    let current = head;
    let position = 1;
    let reversed = null;
    let leftPointer = null;
    let tailReversed = null;

    while (current) {
        const next = current.next;
        if (position === left - 1) {
            leftPointer = current;
        }

        if (position === left) {
            tailReversed = current;
        }

        if (position >= left && position <= right) {
            current.next = reversed;
            reversed = current;
        }

        if (position === right) {
            tailReversed.next = next;
            if (leftPointer) {
                leftPointer.next = reversed;
            } else {
                head = reversed;
            }
            break;
        }
        current = next;
        position++;
    }

    return head;

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

console.log(JSON.stringify(reverseBetween(head, 2, 4)));
console.log(JSON.stringify(reverseBetween(head, 1, 5)));
// console.log(JSON.stringify(reverseBetween(head, 3, 3)));
// console.log(JSON.stringify(reverseList(new ListNode(1, new ListNode(2)))));
// console.log(JSON.stringify(reverseList(new ListNode(1))));