/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  const n = candyType.length / 2;
    
  const candySet = new Set(candyType);
    
  return Math.min(candySet.size,n);
};