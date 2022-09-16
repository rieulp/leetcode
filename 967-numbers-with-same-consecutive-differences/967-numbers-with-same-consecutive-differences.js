/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const answer = [];
    
    const dfs = (L, num, cur) => {
        if(L === n) {
            answer.push(parseInt(num, 10));
            return;
        }
        
        if(cur>=k) dfs(L+1, `${num}${cur-k}`,cur-k);
        if(k && cur+k <= 9) dfs(L+1, `${num}${cur+k}`, cur+k);
    }
    
    for(let i = 1; i <= 9; i++) dfs(1, i, i);
    
    return answer;
};