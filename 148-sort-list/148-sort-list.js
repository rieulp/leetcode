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
var sortList = function(head) {
    if(!head)return head;
    
    let answer = null;
    const arr= [];
    let cur = head;
    
    while(cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    
    arr.sort((a,b)=>b-a);
    
    for(let val of arr) {
        const tmp = new ListNode(val,answer);
        answer = tmp;
    }
    
    return answer;
};