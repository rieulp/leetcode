/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const n = matrix.length;
  const maxV = Number.MAX_SAFE_INTEGER;
  
  for(let i=1; i<n; i++) {
    for(let j=0; j<n; j++){
      matrix[i][j] += Math.min(matrix[i-1][j], matrix[i-1][j-1]||maxV, matrix[i-1][j+1]||maxV);
    }
  }
    
  return Math.min(...matrix[n-1]);
};