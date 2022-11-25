/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(mx of matrix) {
        if(mx[mx.length-1]>=target) return mx.includes(target);
    }
    return false;
};