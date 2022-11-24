/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const visit = new Map();
    let node = head;
    
    while(node) {
        if(visit.has(node)) return node;
        visit.set(node,null);
        node = node.next;
    }
    return null;
};