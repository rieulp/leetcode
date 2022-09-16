/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const arr = [0,1,1];
  let j=2;
    
  for(let i=3; i<=n; i++) {
    let cur = (j+1)%3;
    arr[cur] = arr[(j-1+3)%3] + arr[j];
    j=cur;
  }
    
  return arr[2>=n ? n : j];
};

