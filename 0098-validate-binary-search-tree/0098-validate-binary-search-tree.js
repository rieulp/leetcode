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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const stack = [[root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];
    
    while(stack.length) {
        const [node, l , r] = stack.pop();
        
        if(node.left){
            stack.push([node.left, l, Math.min(r, node.val)])
            if(l >= node.left.val || r<=node.left.val || node.left.val >= node.val) return false;
        }
        
        if(node.right){
            stack.push([node.right, Math.max(l, node.val), r]);
            if(l >= node.right.val || r<=node.right.val || node.right.val <= node.val) return false;
        }
    }
    
    return true;
};