/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = Math.max(...nums);
    const n = nums.length;

    for(let i=1; i<n; i++) {
        nums[i] = Math.max(0,nums[i-1])+nums[i]
        max = Math.max(max, nums[i]);
    }
    
    return max;
};