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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const answer = [];
    const stack = []
    
    if(root) stack.push([0,root]);
    
    while(stack.length) {
        const [level,node] = stack.shift();
        if(answer.length===level) answer.push([]);
        answer[level].push(node.val);
        if(node.left) stack.push([level+1,node.left]);
        if(node.right) stack.push([level+1,node.right]);
    }
    
    return answer;
};