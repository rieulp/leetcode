/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return list1;
    const mergeList = new ListNode();
    let curNode = mergeList;
    while(list1 && list2) {
        if(list1.val<list2.val) {
            curNode.val = list1.val;
            list1 = list1.next;
        }else {
            curNode.val = list2.val;
            list2 = list2.next;
        }
        curNode.next = new ListNode();
        curNode = curNode.next;
    }
    
    if(list1) {
        curNode.val = list1.val;
        curNode.next = list1.next;
    }

    if(list2) {
        curNode.val = list2.val;
        curNode.next = list2.next;
    }
    
    return mergeList;
};