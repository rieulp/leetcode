/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let answer = 0;
    const nodes = [root];
    while(nodes.length) {
        const n = nodes.shift();
        const l = n.left;
        const r = n.right;
        
        if(n.val%2 === 0) {
            answer += (l?.left?.val||0) + (l?.right?.val||0) + (r?.left?.val||0) + (r?.right?.val||0);
        }
        if(l) nodes.push(l);
        if(r) nodes.push(r);
    }
    
    return answer;
};