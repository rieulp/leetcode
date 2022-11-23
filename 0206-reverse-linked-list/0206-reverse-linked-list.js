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
var reverseList = function(head) {
    if(head===null) return head;
    let newHead = new ListNode(head.val,null);
    while(head.next) {
        head = head.next;
        const node = new ListNode(head.val,newHead);
        newHead = node;
    }
    return newHead;
};