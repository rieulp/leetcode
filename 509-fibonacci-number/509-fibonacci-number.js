const fibo = Array.from({length:31},()=>-1);
[fibo[0],fibo[1]] = [0,1];
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(fibo[n] >= 0) return fibo[n];
    
  fibo[n] = fib(n-1) + fib(n-2);
    
  return fibo[n];
};