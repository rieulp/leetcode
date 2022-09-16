/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const answer = [...nums];
    
    answer.forEach((num, i, arr)=>{
        arr[i] += (i ? arr[i-1] : 0);
    })
    
    return answer;
};