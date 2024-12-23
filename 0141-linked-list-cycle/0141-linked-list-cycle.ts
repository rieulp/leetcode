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

function hasCycle(head: ListNode | null): boolean {
    const visited = new Set<ListNode>();

    let node = head;
    while(node!==null) {
        if(visited.has(node)) return true;
        visited.add(node);
        node = node.next;
    }

    return false;
};