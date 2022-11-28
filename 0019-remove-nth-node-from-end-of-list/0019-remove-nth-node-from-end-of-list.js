/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const removeFromEnd = (node, n) => {
        if(!node.next) return 1;
        const i = removeFromEnd(node.next, n);
        if(i === n) {
            node.next = node.next.next;
        }
        return i+1;
    }
    
    if(removeFromEnd(head, n) === n) head = head?.next || null;
    return head;
};