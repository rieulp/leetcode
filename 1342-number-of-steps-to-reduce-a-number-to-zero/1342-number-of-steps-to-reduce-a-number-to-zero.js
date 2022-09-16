/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let answer = 0;
    
    while(num) {
        if(num%2===0) num/=2;
        else num-=1;
        
        answer++;
    }
    return answer
};