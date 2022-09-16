/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const answer = [];
  const cPos = [];
    
  s.split('').forEach((x,i)=>{
    if(x === c){
      const left = cPos[cPos.length-1];
      const right = i;
      
      for(let i=left||0; i<right; i++) {
        answer[i] = Math.min(answer[i], right-i);
      }
        
      cPos.push(i);
      answer.push(0);
    } 
    else {
      const left = cPos[cPos.length-1]!==undefined? cPos[cPos.length-1]:Number.MIN_SAFE_INTEGER;
      answer.push(i-left);
    }
  });
  
  return answer;
};