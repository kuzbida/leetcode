/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
    let result = null;
    let resultPointer;
    const pointers = {};

    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            pointers[i] = lists[i];
        }
    }

    while (Object.keys(pointers).length > 0) {
        let minimum = {val: Infinity, key: undefined};

        Object.keys(pointers).forEach((idx) => {
            const node = pointers[idx];

            if (node.val < minimum.val) {
                minimum.val = node.val;
                minimum.key = idx;
            }
        });

        if (!result) {
            result = new ListNode(minimum.val);
            resultPointer = result;
        } else {
            resultPointer.next = new ListNode(minimum.val);
            resultPointer = resultPointer.next;
        }

        if (pointers[minimum.key].next) {
            pointers[minimum.key] = pointers[minimum.key].next
        } else {
            delete pointers[minimum.key];
        }
    }

    return result;
};

/*
Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
* */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const a = [1, 4, 5];
const b = [1, 3, 4];
const c = [2, 6];
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
const HeadC = c.reduceRight((prev, current) => {
    const node = new ListNode(current);
    node.next = prev instanceof ListNode ? prev : new ListNode(prev);
    return node;
});

console.log(mergeKLists([HeadA, HeadB, HeadC]))
console.log(mergeKLists([]))