/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const answer = [];

    if(changed.length % 2) return answer;
    
    changed.sort((a,b)=>a-b)

    const map = new Map();
    
    for(v of changed) {
        const half = v/2;
        const num = map.get(half)||0;
        
        if(v % 2 === 0 && map.has(half) && num > 0) {
            answer.push(half);
            map.set(half, num - 1);
        }else{
            map.set(v, (map.get(v) || 0) + 1);
        } 
    }
    
    if(answer.length !== changed.length / 2) return [];
    
    return answer;
};