/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const array = Array.from({length:numRows},(_,index)=>Array.from({length:index+1},()=>1));
    
    for(let i=2; i<numRows; i++) {
        for(let j=1; j<i; j++) array[i][j] = array[i-1][j-1]+array[i-1][j];
    }
    return array
};