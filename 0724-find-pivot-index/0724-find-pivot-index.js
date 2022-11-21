/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const n = nums.length;
    const sum = nums.reduce((a,b)=>a+b,0);
    const left = Array.from({length:n},() => 0);
    
    for(let i = 0; i < n; i++) {
        if(i > 0) {
            left[i] = left[i-1] + nums[i-1];
            if(left[i]===sum-left[i]-nums[i]) return i;
        }else if(sum - nums[i] === 0) return i;
    }
    return -1;
    
};