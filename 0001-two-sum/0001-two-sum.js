/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    for(let i=0; i<n-1; i++) {
        for(let j=i+1; j<n; j++) {
            if(nums[i]+nums[j]===target) return [i,j];
        }
    }
};