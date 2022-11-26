/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const answer = [];
    if(root) {
        answer.push(root.val,...root.children?.map(node=>preorder(node)).flat()||[]);
    }
    return answer;
};