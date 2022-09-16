/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const answer = new ListNode();
    let curNode = answer;
    let plus = false;
    let node1 = l1;
    let node2 = l2;
    
    while(node1 || node2) {
        const sum = (node1?.val||0) + (node2?.val||0) + (plus?1:0);
        if(sum>=10) plus = true;
        else plus = false;
        
        curNode.val = sum%10;
        
        if(node1?.next || node2?.next){
            curNode.next = new ListNode();
            curNode = curNode.next;
        }else if(plus){
            curNode.next = new ListNode();
            curNode.next.val = 1;
            curNode.next.next = null;
        }
        
        node1 = node1?.next;
        node2 = node2?.next;
    }

    return answer;
};