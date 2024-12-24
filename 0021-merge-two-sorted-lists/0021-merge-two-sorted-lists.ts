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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!(list1 && list2)) return list1 ?? list2;

    let rootNode = new ListNode();
    let curNode = rootNode;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curNode.val = list1.val;
            list1 = list1.next;
        } else {
            curNode.val = list2.val;
            list2 = list2.next;
        }
        curNode.next = new ListNode();
        curNode = curNode.next
    }

    if (list1 || list2) {
        const lastNode = list1 ?? list2
        curNode.val = lastNode.val;
        curNode.next = lastNode.next;
    }

    return rootNode;
};