/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    const map = new Map();
    for(let i=0; i<n; i++) {
        if(map.has(target-nums[i])) return [i,map.get(target-nums[i])];
        else map.set(nums[i],i);
    }
};