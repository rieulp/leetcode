/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let reversedNode = new ListNode();
    let node = head;

    while (node !== null) {
        reversedNode.val = node.val;
        const newNode = new ListNode();
        newNode.next = reversedNode;
        reversedNode = newNode;
        node = node.next;
    }
    return reversedNode.next;
};