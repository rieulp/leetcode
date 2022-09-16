/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const major = [0,0];
    const nOfNum = {};
    
    for(let n of nums) {
        if(n in nOfNum) nOfNum[n]++;
        else nOfNum[n] = 1;
        
        if(major[1] < nOfNum[n]) {
            major[0]=n;
            major[1]=nOfNum[n];
        }
    }
    
    return major[0];
};